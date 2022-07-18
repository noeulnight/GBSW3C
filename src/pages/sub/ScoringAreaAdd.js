import React, { useEffect, useState, createRef } from "react";
import {
  HiChevronLeft,
  HiChevronRight,
  HiChevronDown,
  HiPlus,
  HiRefresh,
  HiReply,
} from "react-icons/hi";
import { FaChevronLeft, FaChevronRight, FaPlus, FaBackspace, FaDownload } from "react-icons/fa";
import Select from 'react-select'
import { Link } from "react-router-dom";
import styles from '../../css/ScoringAreaAdd.module.scss'

const ScoringAreaAdd = ({ mode, isOpen }) => {
  const [categories, setCategories] = useState(null)
  const [category, setCategory] = useState(null)
  const [subcategory, setSubcategory] = useState(null)

  function onCategoryChange (e) {
    setCategory(e.value)
    setSubcategory(null)
  }

  function onSubCategoryChange (e) {
    setSubcategory(e.value)
  }

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
            <div className={styles.name}>
              <div className={styles.type}>
                <p>종류 이름</p>
                <input className={styles.type} />
              </div>
            </div>
            <div className={styles.btn}>
              <Link to="/">
                <button className={styles.cancelbtn} style={{ alignSelf: 'center', cursor: 'pointer', border: 'none', backgroundColor: 'gray', color: 'white', padding: 10, fontSize: 16, borderRadius: 4}}>
                  취소
                </button>
              </Link>
              <button className={styles.submitbtn} style={{ marginLeft: 10, cursor: 'pointer', alignSelf: 'center', border: 'none', backgroundColor: 'rgb(6, 132, 196)', color: 'white', padding: 10, fontSize: 16, borderRadius: 4}}>
                다음
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScoringAreaAdd