import React, { useState } from "react"
import { Link } from "react-router-dom"
import styles from '../css/Navigation.module.scss'
import logo from "../img/logo.png"

const Navigation = () => {
  const [active, setActive] = useState(1);

  return (
    <div>
      <div className={styles.navigation}>
        <div className={styles.title}>
          <img src={logo} style={styles.logo} alt="logo" />
        </div>
        <div className={styles.list}>
          <h1>2113 임준형</h1>
          <ul>  
            <Link to="" onClick={() => setActive(1)}><li className={active === 1 ? styles.checked : null}><p>신청 리스트</p></li></Link>
            <Link to="" onClick={() => setActive(2)}><li className={active === 2 ? styles.checked : null}><p>명예의 전당</p></li></Link>
            <Link to="" onClick={() => setActive(3)}><li className={active === 3 ? styles.checked : null}><p>3C 인증제</p></li></Link>
            <Link to="" onClick={() => setActive(4)}><li className={active === 4 ? styles.checked : null}><p>프로필</p></li></Link>
          </ul>
        </div>
        <div className={styles.outBox}>
          <ul>
            <li><a href="#">비밀번호 재설정</a></li>
            <li><a href="#">로그아웃</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navigation