import React, { useState, useRef } from "react";
import {
  HiChevronLeft,
  HiChevronRight,
  HiChevronDown,
  HiPlus,
  HiRefresh,
  HiReply,
} from "react-icons/hi";
import { FaChevronLeft, FaChevronRight, FaPlus, FaBackspace, FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from '../../css/ScoringAreaAdd.module.scss'

const ScoringAreaAddSecond = ({ mode, isOpen }) => {

  return (
    <div>
      <div className={isOpen === true ? styles.open_main : styles.hide_main}>
        <div className={styles.navbar} style={mode === "light" ? { background: "#F3F5F7" } : { background: "#2B2E44" }}>
          <div>
            <Link to="/" style={ mode === "light" ? { color: "#ACB2CB" } : { color: "#6F738E" }}> 
              <div>
                <FaChevronLeft size={24} />{" "}
              </div>
              돌아가기
            </Link>
          </div>
          <div>
            <button style={ mode === "light" ? { color: "#ACB2CB" } : { color: "#6F738E" }}>  
              <div>
                <FaChevronRight size={24} />{" "}
              </div>
              다음으로
            </button>
          </div>
        </div>
        <div className={styles.listHeader} style={mode === 'light' ? {color: '#191919'} : {color: '#fff'}}>
          <div className={styles.title}> 관리자 페이지/점수 영역관리/ <span style={{color: '#0684c4'}}>추가하기</span>
          </div>
        </div>
        <div className={styles.listBox}>
          <div className={styles.Box} style={mode === 'light' ? {background: '#FFF', color: '#ACB2CB'} : {background: '#2F3146', color: '#6F738E'}}>
            <div className={styles.listBoxHeader}>
              <div style={mode === 'light' ? {color: '#191919'} : {color: '#FFF'}}>
                신청하기
              </div>
            </div>
            <div className={styles.inputForm}>
              <input type="number" placeholder="점수를 입력하세요" />
            </div>
            <div className={styles.btn}>
              <Link to="/ScoringAreaAdd">
                <button className={styles.cancelbtn} style={{ alignSelf: 'center', cursor: 'pointer', border: 'none', backgroundColor: 'gray', color: 'white', padding: 10, fontSize: 16, borderRadius: 4}}>
                  돌아가기
                </button>
              </Link>
              <button className={styles.submitbtn} style={{ marginLeft: 10, cursor: 'pointer', alignSelf: 'center', border: 'none', backgroundColor: 'rgb(6, 132, 196)', color: 'white', padding: 10, fontSize: 16, borderRadius: 4}}>
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScoringAreaAddSecond