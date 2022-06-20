import React from "react"
import { Link } from "react-router-dom"
import useSessionStorage from "./UseSessionStorage"
import styles from '../css/Navigation.module.scss'
import profile from '../img/profile.png'
import Chart from "./Chart"

const Navigation = ({ grade, mode, isOpen }) => {
  const [active, setActive] = useSessionStorage("active", 1)

  if ( grade == 0) {
    return (
      <div className={isOpen === true ? styles.show_nav : styles.hide_nav}>
        <div className={mode === 'light' ? styles.light_navigation : styles.dark_navigation}>
          <div className={styles.profile}>
            <img src={profile} alt="ProfileIcon" />
            <div>
              <h4 className={mode === 'light' ? styles.light_h4 : styles.dark_h4}>2204김무일</h4>
              <span className={mode === 'light' ? styles.light_span : styles.dark_span}>소프트웨어개발과</span>
            </div>
          </div>
          <div className={styles.list}>
            <p className={mode === 'light' ? styles.light_tag : styles.dark_tag}>학생 페이지</p>
            <ul className={mode === 'light' ? styles.light_ul : styles.dark_ul}>  
              <Link to="" onClick={() => setActive(1)}><li className={active === 1 ? styles.checked : null}><p>신청 리스트</p></li></Link>
              <Link to="" onClick={() => setActive(2)}><li className={active === 2 ? styles.checked : null}><p>명예의 전당</p></li></Link>
              <Link to="" onClick={() => setActive(3)}><li className={active === 3 ? styles.checked : null}><p>3C 인증제</p></li></Link>
              <Link to="" onClick={() => setActive(4)}><li className={active === 4 ? styles.checked : null}><p>프로필</p></li></Link>
            </ul>
          </div>
          <div className={styles.chart}><Chart mode={mode}/></div>
          <div className={styles.outBox}>
            <div><Link to="">비밀번호 재설정</Link></div>
            <div><Link to="">로그아웃</Link></div>
          </div>
        </div>
      </div>
    )
  } else if (grade == 1) {
    return (
      <div className={isOpen === true ? styles.show_nav : styles.hide_nav}>
        <div className={mode === 'light' ? styles.light_navigation : styles.dark_navigation}>
          <div className={styles.profile}>
            <img src={profile} alt="ProfileIcon" />
            <div>
              <h4 className={mode === 'light' ? styles.light_h4 : styles.dark_h4}>정영훈</h4>
              <span className={mode === 'light' ? styles.light_span : styles.dark_span}>교사</span>
            </div>
          </div>
          <div className={styles.list}>
            <p className={mode === 'light' ? styles.light_tag : styles.dark_tag}>교사 페이지</p>
            <ul className={mode === 'light' ? styles.light_ul : styles.dark_ul}>  
              <Link to="" onClick={() => setActive(1)}><li className={active === 1 ? styles.checked : null}><p>신청 리스트</p></li></Link>
              <Link to="" onClick={() => setActive(2)}><li className={active === 2 ? styles.checked : null}><p>학생 리스트</p></li></Link>
              <Link to="" onClick={() => setActive(3)}><li className={active === 3 ? styles.checked : null}><p>명예의 전당</p></li></Link>
              <Link to="" onClick={() => setActive(4)}><li className={active === 4 ? styles.checked : null}><p>공지사항</p></li></Link>
              <Link to="" onClick={() => setActive(5)}><li className={active === 5 ? styles.checked : null}><p>3C 인증제</p></li></Link>
            </ul>
          </div>
          <div className={styles.outBox}>
            <div><Link to="">비밀번호 재설정</Link></div>
            <div><Link to="">로그아웃</Link></div>
          </div>
        </div>
      </div>
    )
  } else if (grade == 2) {
    return (
      <div className={isOpen === true ? styles.show_nav : styles.hide_nav}>
        <div className={mode === 'light' ? styles.light_navigation : styles.dark_navigation}>
          <div className={mode === 'light' ? styles.light_logo : styles.dark_logo}>Gbsw Logo</div>
          <div className={styles.profile}>
            <img src={profile} alt="ProfileIcon" />
            <div>
              <h4 className={mode === 'light' ? styles.light_h4 : styles.dark_h4}>관리자</h4>
              <span className={mode === 'light' ? styles.light_span : styles.dark_span}>관리자</span>
            </div>
          </div>
          <div className={styles.list}>
            <p className={mode === 'light' ? styles.light_tag : styles.dark_tag}>교사 페이지</p>
            <ul className={mode === 'light' ? styles.light_ul : styles.dark_ul}>  
              <Link to="" onClick={() => setActive(1)}><li className={active === 1 ? styles.checked : null}><p>신청 리스트</p></li></Link>
              <Link to="" onClick={() => setActive(2)}><li className={active === 2 ? styles.checked : null}><p>학생 리스트</p></li></Link>
              <Link to="" onClick={() => setActive(3)}><li className={active === 3 ? styles.checked : null}><p>명예의 전당</p></li></Link>
              <Link to="" onClick={() => setActive(4)}><li className={active === 4 ? styles.checked : null}><p>공지사항</p></li></Link>
              <Link to="" onClick={() => setActive(5)}><li className={active === 5 ? styles.checked : null}><p>3C 인증제</p></li></Link>
            </ul>
            <p className={mode === 'light' ? styles.light_tag : styles.dark_tag}>관리자 페이지</p>
            <ul className={mode === 'light' ? styles.light_ul : styles.dark_ul}>  
              <Link to="" onClick={() => setActive(6)}><li className={active === 6 ? styles.checked : null}><p>통계 분석</p></li></Link>
              <Link to="" onClick={() => setActive(7)}><li className={active === 7 ? styles.checked : null}><p>계정 관리</p></li></Link>
              <Link to="" onClick={() => setActive(8)}><li className={active === 8 ? styles.checked : null}><p>점수 영역 관리</p></li></Link>
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
} 

export default Navigation