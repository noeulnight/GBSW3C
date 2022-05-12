import React from "react"
import styles from '../css/Student.module.css'
import logo from "../img/logo.png"

const Student = () => {
  return (
    <div>
      <div>
        <div className={styles.navigation}>
          <div className={styles.title}>
            <img src={logo} style={styles.logo} alt="logo" />
          </div>
          <div className={styles.list}>
            <h1>학생 페이지</h1>
            <ul>
              <li className={styles.checked}><a>신청 리스트</a></li>
              <li><a>명예의 전당</a></li>
              <li><a>3C 인증제</a></li>
              <li><a>프로필</a></li>
            </ul>
          </div>
          <div className={styles.outBox}>
            <ul>
              <li><a href="#">비밀번호 재설정</a></li>
              <li><a href="#">로그아웃</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.main}>
          
        </div>
      </div>
    </div>
  )
}

export default Student