import React, { useEffect, useState, createRef } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Viewer } from '@toast-ui/react-editor'
import '@toast-ui/editor/dist/toastui-editor-viewer.css'
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

import {
  HiChevronLeft,
  HiChevronRight,
  HiChevronDown,
  HiPlus,
  HiRefresh,
  HiReply,
} from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import Select from 'react-select'
import { useNavigate, Link } from "react-router-dom";
  
import styles from "../../css/StudentSubmitFilePage.module.scss";

const StudentSubmitFilePostPage = ({ mode, isOpen }) => {
  const fileRef = createRef()
  const postId = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false) 
  const [message, setMessage] = useState('')
  const [file, setFile] = useState([])
  const [post, setPost] = useState(null)
  const navigation = useNavigate()
  const [previous, setPrevious] = useState('')

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    setLoading(true)
    const data = await fetch('/api/board/v1/posts/' + postId + '/@me').then((res) => res.json())
    if (data.success) {
      setFile(data.data.post.files)
      setPost(data.data.post)
    }
    setLoading(false)
  }

  async function onAdd () {
    const file = fileRef?.current?.files?.[0]
    if (previous === file.name) return
    setPrevious(file.name)
    setUploading(true)
    const data = await fetch('/api/board/v1/files/@me', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        postId: parseInt(postId),
        fileName: file.name
      })
    }).then((res) => res.json())

    if (data.success) {
      await fetch(data.data.url, {
        method: 'PUT',
        body: file
      })
      setUploading(false)
      fetchData()
      return
    }

    setUploading(false)
    setMessage('오류가 발생했습니다!')
  }

  async function onDelete (fileId) {
    setLoading(true)
    await fetch('/api/board/v1/files/' + fileId + '/@me', {
        method: 'DELETE'
    })
    setLoading(false)
    fetchData()
  }

  return (
      <div>
      {uploading && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100vw', height: '100vh',
          zIndex: 100, backgroundColor: '#00000099', 
          display: 'flex', justifyContent: 'center', 
          alignItems: 'center', color: 'white' }}>
            업로드 중 입니다...
        </div>
      )}
      {loading && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100vw', height: '100vh',
          zIndex: 100, backgroundColor: '#00000099', 
          display: 'flex', justifyContent: 'center', 
          alignItems: 'center', color: 'white' }}>
            로딩중 입니다...
        </div>
      )}
      
      <div className={isOpen === true ? styles.open_main : styles.hide_main}>
        <div className={styles.navbar} style={mode === "light" ? {background: "#F3F5F7"} : {background: "#2B2E44"}}>
          <div>
            <button onClick={() => navigation('/')} style={mode === "light" ? { color: "#ACB2CB" } : { color: "#6F738E" }}>
              <div>
                <FaCheck size={24} />
              </div>
              완료
            </button>
          </div>
        </div>
        <div className={styles.listHeader} style={mode === 'light' ? {color: '#191919'} : {color: '#fff'}}>
          <div className={styles.title}>
            학생 페이지/신청리스트/<span style={{color: '#0684c4'}}>파일업로드</span>
          </div>
        </div>
        <div className={styles.listBox}>
          <div className={styles.Box} style={mode === 'light' ? {background: '#FFF', color: '#ACB2CB'} : {background: '#2F3146', color: '#6F738E'}}>
            <div className={styles.listBoxHeader}>
              <div style={mode === 'light' ? {color: '#191919'} : {color: '#FFF'}}>신청 상세</div>
            </div>
            <div className={styles.editor}>
              <div className={mode === 'light' ? styles.light_edit : styles.dark_edit}>
                <div>
                  <p>{post ? post.subCategory.parent.label : '로딩중...'}: {post ? post.subCategory.parent.description : '로딩중...'}</p>
                </div>
                <div>
                  <p>서브카테고리: {post ? post.subCategory.label : '로딩중...'}</p>
                </div>
                <div>
                  <p>담당 선생님: {post ? post.subCategory.parent.manageUser.name : '로딩중...'}</p>
                </div>
                <div className={styles.textarea}>
                  <p>내용</p>
                  <p style={mode === 'light' ? styles.light_text : styles.dark_text}><Viewer key={post?.content} initialValue={post ? post.content : '로딩중...'} /></p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.Box} style={mode === 'light' ? {background: '#FFF', color: '#ACB2CB'} : {background: '#2F3146', color: '#6F738E'}}>
            <div className={styles.listBoxHeader}>
              <div style={mode === 'light' ? {color: '#191919'} : {color: '#FFF'}}>파일 업로드</div>
            </div>
            <div className={styles.fileoplode}> 
              <div className={mode === 'light' ? styles.light_fileop : styles.dark_fileop}>
                {file.map((v) => (
                  <p>
                    {v.url.split('/')[v.url.split('/').length - 1]}
                    <button style={mode === 'light' ? {color: '#ACB2CB'} : {color: '#6F738E'}} onClick={() => onDelete(v.fileId)}><AiFillDelete size={24}/></button>
                  </p>
                ))}
                <input ref={fileRef} onChange={onAdd} type="file" id="file" />
                <label htmlFor="file">파일 업로드</label>
              </div>
            </div>
            <div className={styles.btn}>
              <button onClick={() => navigation('/')} className={styles.submitbtn} style={{ marginLeft: 10, cursor: 'pointer', alignSelf: 'center', border: 'none', backgroundColor: 'rgb(6, 132, 196)', color: 'white', padding: 10, fontSize: 16, borderRadius: 4}}>
                  완료
              </button>
            </div>
            <p style={{
              ...(mode == "light"
              ? {
                color: 'black'
              }
              : {
                color: 'white'
              })
            }}>

            {message}

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentSubmitFilePostPage