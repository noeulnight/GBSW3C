import React, { useEffect, useState, createRef } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Editor } from '@toast-ui/react-editor'
import '@toast-ui/editor/dist/toastui-editor.css'
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

import {
  HiChevronLeft,
  HiChevronRight,
  HiChevronDown,
  HiPlus,
  HiRefresh,
  HiReply,
} from "react-icons/hi";
import { FaChevronLeft, FaChevronRight, FaPlus, FaBackspace } from "react-icons/fa";
import Select from 'react-select'
import { useNavigate, Link } from "react-router-dom";

import styles from "../../css/StudentSubmitPostPage.module.scss";

const StudentSubmitPostPage = ({ mode, isOpen }) => {
  const editor = createRef()
  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState(null)
  const [category, setCategory] = useState(null)
  const [subcategory, setSubcategory] = useState(null)
  const [content, setContent] = useState('')
  const [message, setMessage] = useState('')
  const navigation = useNavigate()
  
  function onCategoryChange (e) {
    setCategory(e.value)
  }

  function onSubCategoryChange (e) {
    setSubcategory(e.value)
  }

  function onContentChange (e) {
    setContent(e.target.value)
  }

  async function addImageBlobHook (_, callback) {
    callback('https://cdn.discordapp.com/attachments/530043751901429762/992254980000071711/notsupport.png')
  }

  useEffect(() => {
    (async () => {
      const res = await fetch('/api/board/v1/categories').then((res) => res.json())
      setCategories(res.data.categories)
      setLoading(false)
    })()
  }, [])

  async function onSubmit () {
    if (content.length > 100) {
      setMessage('설명글은 100자 이상 입력할 수 없습니다.')
      return
    }

    setLoading(true)
    const data = await fetch('/api/board/v1/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content,
        subcategoryId: subcategory
      })
    }).then((res) => res.json())

    if (data.success) {
      navigation('/upload/' + data.data.postId)
      return
    }

    setLoading(false)
    setMessage('오류가 발생했습니다! 모두 입력했는지 확인한 후 다시 시도해 보세요')
  }

  return (
      <div>
      {loading && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100vw', height: '100vh',
          zIndex: 100, backgroundColor: '#00000099', 
          display: 'flex', justifyContent: 'center', 
          alignItems: 'center', color: 'white' }}>
          처리중입니다...
        </div>
      )}
      <div className={isOpen === true ? styles.open_main : styles.hide_main}>
      <div
            className={styles.navbar}
            style={
              mode === "light"
                ? { background: "#F3F5F7" }
                : { background: "#2B2E44" }
            }
          >
            <div>
              <Link
                to="/"
                style={
                  mode === "light" ? { color: "#ACB2CB" } : { color: "#6F738E" }
                }
              >
                <div>
                  <FaChevronLeft size={24} />{" "}
                </div>
                돌아가기
              </Link>
            </div>
            <div>
              <button 
                onClick={onSubmit}
                to="/submit"
                style={
                  mode === "light" ? { color: "#ACB2CB" } : { color: "#6F738E" }
                }
              >
                <div>
                  <FaChevronRight size={24} />{" "}
                </div>
                다음으로
              </button>
            </div>
          </div> 
        <div className={styles.listHeader} style={mode === 'light' ? {color: '#191919'} : {color: '#fff'}}>
          <div className={styles.title}>
            학생 페이지/신청리스트/<span style={{color: '#0684c4'}}>신청하기</span>
          </div>
        </div>
        <div className={styles.listBox}>
          <div className={styles.Box} style={mode === 'light' ? {background: '#FFF', color: '#ACB2CB'} : {background: '#2F3146', color: '#6F738E'}}>
            <div className={styles.listBoxHeader}>
              <div style={mode === 'light' ? {color: '#191919'} : {color: '#FFF'}}>신청하기</div>
            </div>
            <div className={styles.category}>
              <div>
              <p>카테고리 선택</p>
              <Select
                styles={{
                  control: (provided) => ({
                    cursor: 'pointer',
                    ...provided,
                    ...(mode == "light"
                      ? {
                          border: "1px solid #ACB2CB",
                          backgroundColor: "#F3F5F7",
                        }
                      : {
                          border: "1px solid #6F738E",
                          backgroundColor: "#2B2E44",
                        }),
                  }),
                  singleValue: (provided) => ({
                    ...provided,
                    ...(mode == "light"
                    ? { color: "#8993A7" }
                    : { color: "#8C8EA0" }),
                  }),
                  menu: (provided) => ({
                    ...provided,
                    ...(mode == "light"
                      ? {
                        color: "black",
                        backgroundColor: "#F3F5F7",
                      }
                      : {
                        color: "white",
                        backgroundColor: "#383850",
                      }),
                  }),
                  option: (provided, state) => ({
                    ...provided,
                    ...(mode == "light"
                      ? {
                        color: state.isFocused ? 'white' : "black",
                        backgroundColor: state.isFocused ? 'rgb(6, 132, 196)' :  "#F3F5F7",
                      }
                      : {
                        color: state.isFocused ? 'white' : "white",
                        backgroundColor: state.isFocused ? 'rgb(6, 132, 196)' : "#383850",
                      }),
                  }),
                  placeholder: (provided) => ({
                    ...provided,
                    ...(mode == "light"
                      ? {
                        color: '#8993A7'
                      }
                      : {
                        color: '#8C8EA0'
                      }),
                  })
                }}
                isSearchable={false}
                onChange={onCategoryChange}
                options={categories?.map((v) => ({ value: v.categoryId, label: v.label })) || []}
                placeholder="여기를 클릭해 카테고리를 선택하세요."/>
              </div>
              <div>
              <p>서브 카테고리 선택</p>
              <Select
                styles={{
                  control: (provided) => ({
                    cursor: 'pointer',
                    ...provided,
                    ...(mode == "light"
                      ? {
                          opacity: category ? 1 : 0.4,
                          border: "1px solid #ACB2CB",
                          backgroundColor: "#F3F5F7", 
                        }
                      : {
                          opacity: category ? 1 : 0.4, 
                          border: "1px solid #6F738E",
                          backgroundColor: "#2B2E44",
                        }),
                  }),
                  singleValue: (provided) => ({
                    ...provided,
                    ...(mode == "light"
                      ? { color: "#8993A7" }
                      : { color: "#8C8EA0" }),
                  }),
                  menu: (provided) => ({
                    ...provided,
                    ...(mode == "light"
                      ? {
                        color: "black",
                        backgroundColor: "#F3F5F7",
                      }
                      : {
                        color: "white",
                        backgroundColor: "#383850",
                      }),
                  }),
                  option: (provided, state) => ({
                    ...provided,
                    ...(mode == "light"
                      ? {
                        color: state.isFocused ? 'white' : "black",
                        backgroundColor: state.isFocused ? 'rgb(6, 132, 196)' :  "#F3F5F7",
                      }
                      : {
                        color: state.isFocused ? 'white' : "white",
                        backgroundColor: state.isFocused ? 'rgb(6, 132, 196)' : "#383850",
                      }),
                  }),
                  placeholder: (provided) => ({
                    ...provided,
                    ...(mode == "light"
                      ? {
                        color: '#8993A7'
                      }
                      : {
                        color: '#8C8EA0'
                      }),
                  })
                }}
                isSearchable={false}
                isDisabled={!category}
                onChange={onSubCategoryChange}
                options={category ? categories.find((v) => v.categoryId === category).children.map((v) => ({ value: v.subcategoryId, label: v.label })) : []}
                placeholder="카테고리를 먼저 선택해주세요."/>
              </div>
            </div>
            <div className={styles.editor}>
              <p>간단한 설명 (선택)</p>
              <div style={{height: '100%'}} className={mode === 'light' ? styles.light_edit : styles.dark_edit}>

                <Editor
                  usageStatistics={false}
                  ref={editor}
                  hooks={{ addImageBlobHook }}
                  initialEditType="wysiwyg"
                  hideModeSwitch height="100%"
                  key={mode} theme={mode !== 'light' ? 'dark' : undefined} 
                  onChange={(e) =>
                    setContent(editor.current.getInstance().getHTML())}/>

              </div>
            </div>
            <div className={styles.btn}>
              <Link to="/">
                <button className={styles.cancelbtn} style={{ alignSelf: 'center', cursor: 'pointer', border: 'none', backgroundColor: 'gray', color: 'white', padding: 10, fontSize: 16, borderRadius: 4}}>
                  취소
                </button>
              </Link>
              <button onClick={onSubmit} className={styles.submitbtn} style={{ marginLeft: 10, cursor: 'pointer', alignSelf: 'center', border: 'none', backgroundColor: 'rgb(6, 132, 196)', color: 'white', padding: 10, fontSize: 16, borderRadius: 4}}>
                다음
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

export default StudentSubmitPostPage