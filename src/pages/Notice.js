import React from "react";
import { BsChevronLeft, BsChevronRight, BsChevronDown } from 'react-icons/bs'
import styles from '../css/Notice.module.scss'

const Notice = ({ mode }) => {
  return (
    <div className={styles.main}>
      <div className={styles.title} style={mode === 'light' ? {color: '#191919'} : {color: '#fff'}}>
        <div>
          <span style={{color : '#0684c4'}}>공지사항</span>
        </div>
        <div>
          <div className={styles.page}>
            <span>페이지</span>
            <input type="text" defaultValue="1"  style={mode === 'light' ? {border: '1px solid #ACB2CB'} : {backgroundColor: '#2F3146', border: '1px solid #6F738E'}} /> / 1
          </div>
          <div className={styles.btn}>
            <label className={styles.left} style={mode === 'light' ? {background: '#fff'} : {background: '#2F3146', color: '#6F738E'}}><BsChevronLeft /></label>
            <label className={styles.right} style={mode === 'light' ? {color: '#fff'} : {color: '#2B2E44'}}><BsChevronRight /></label>
          </div>
        </div>
      </div>
      <div className={styles.listBox} style={mode === 'light' ? {background: '#fff'} : {background: '#2F3146'}}>
        <div className={styles.box}>
          <div className={styles.listHeader} style={mode === 'light' ? {color: '#191919'} : {color: '#fff'}}>
            <div>공지사항</div>
          </div>
          <table>
            <thead style={mode === 'light' ? {color: '#ACB2CB', background: '#F3F5F7', borderLeft: '24px solid #F3F5F7', borderRight: '24px solid #F3F5F7'} : {color: '#6F738E', background: '#2B2E44', borderLeft: '24px solid #2B2E44', borderRight: '24px solid #2B2E44'}}>
              <tr>
                <td>번호</td>
                <td>제목</td>
                <td>게시일</td>
                <td>작성자</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0001</td>
                <td>잠와요...</td>
                <td>2022-06-24</td>
                <td>살려줘</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> 
    </div>
  )
}

export default Notice