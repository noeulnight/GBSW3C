import React from 'react'
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from '../../css/StudentListPageAdd.module.scss'

const StudentListPageAdd = ({ mode, isOpen }) => {
  return (
    
    <div className={styles.listBox}>
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
          <Link to="/ScoringAreaAddSecond" style={ mode === "light" ? { color: "#ACB2CB" } : { color: "#6F738E" }}>  
            <div>
              <FaChevronRight size={24} />{" "}
            </div>
            확인
          </Link>
        </div>
      </div>
      <div className={styles.Box} style={mode === 'light' ? {background: '#FFF', color: '#ACB2CB'} : {background: '#2F3146', color: '#6F738E'}}>
        <div className={styles.listBoxHeader}>
          <div style={mode === 'light' ? {color: '#191919'} : {color: '#FFF'}}>
            점수부여
          </div>
        </div>
        <div className={styles.inputForm}>
          <p style={{marginBottom: '5px'}}>체크된 이름</p>
          <div className={styles.checkedName}>
            {/* 대충 이름들 들어갈 공간 */}
            <p style={mode === 'light' ? {background: '#F3F5F7'} : {background: '#2B2E44'}}>테스트</p>
          </div>
          <div className={styles.category}>
            <div>
              <p>영역</p>
              <input placeholder='점수를 줄 영역을 입력하세요.' className={mode === 'light' ? styles.light_inp : styles.dark_inp} 
                style={mode === 'light'
                ? {color: "#191919", background: '#F3F5F7', border: "1px solid #ACB2CB", padding: '8px', borderRadius: '5px' }
                : {color: '#6F738E', background: '#2B2E44', border: "1px solid #6F738E", padding: '8px', borderRadius: '5px'}
              } />
            </div>
            <div>
              <p>점수</p>
              <input placeholder='지급 할 점수를 입력하세요' className={mode === 'light' ? styles.light_inp : styles.dark_inp} 
                style={mode === 'light'
                ? {color: "#191919", background: '#F3F5F7', border: "1px solid #ACB2CB", padding: '8px', borderRadius: '5px' }
                : {color: '#6F738E', background: '#2B2E44', border: "1px solid #6F738E", padding: '8px', borderRadius: '5px'}
              } />
            </div>
          </div>
        </div>

        <div className={styles.btn}>
          <button className={styles.cancelbtn} style={{ alignSelf: 'center', cursor: 'pointer', border: 'none', backgroundColor: 'gray', color: 'white', padding: 10, fontSize: 16, borderRadius: 4}} onClick={() => setStep(1)}>
            돌아가기
          </button>
          <button className={styles.submitbtn} style={{ marginLeft: 10, cursor: 'pointer', alignSelf: 'center', border: 'none', backgroundColor: 'rgb(6, 132, 196)', color: 'white', padding: 10, fontSize: 16, borderRadius: 4}} >
            확인
          </button>
        </div>
      </div>
    </div>
  )
}

export default StudentListPageAdd