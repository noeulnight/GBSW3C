import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import useSessionStorage from "./UseSessionStorage"
import styles from '../css/Navigation.module.scss'
import profile from '../img/profile.png'

const Navigation = () => {
  const [active, setActive] = useSessionStorage("active", 1)

  return (
    <div>
      <div className={styles.navigation}>
        <div className={styles.logo}>Gbsw Logo</div>
        <div className={styles.profile}>
          <img src={profile} alt="ProfileIcon" />
          <div>
            <h4>2204김무일</h4>
            <span>소프트웨어개발과</span>
          </div>
        </div>
        <div className={styles.list}>
          <p className={styles.tag}>학생 페이지</p>
          <ul>  
            <Link to="" onClick={() => setActive(1)}><li className={active === 1 ? styles.checked : null}><p>신청 리스트</p></li></Link>
            <Link to="" onClick={() => setActive(2)}><li className={active === 2 ? styles.checked : null}><p>명예의 전당</p></li></Link>
            <Link to="" onClick={() => setActive(3)}><li className={active === 3 ? styles.checked : null}><p>3C 인증제</p></li></Link>
            <Link to="" onClick={() => setActive(4)}><li className={active === 4 ? styles.checked : null}><p>프로필</p></li></Link>
          </ul>
        </div>
        <div className={styles.outBox}>
          <div><Link to="">비밀번호 재설정</Link></div>
          <div><Link to="">로그아웃</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Navigation