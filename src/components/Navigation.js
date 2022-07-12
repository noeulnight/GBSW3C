import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import useSessionStorage from "./UseSessionStorage"
import styles from '../css/Navigation.module.scss'
import { HiChevronDown } from "react-icons/hi";
import profile from '../img/user.png'
import Chart from "./Chart"

const Navigation = ({ grade, mode, isOpen, page, onChangePage }) => {
const [active, setActive] = useSessionStorage("active", 1)
const [lists, setLists] = useSessionStorage("lists", 1)
const [user, setUser] = useState(null)
const [depart, setDepart] = useState(null)

useEffect(() => {
  (async () => {
    const res = await fetch('/api/auth/v1/@me').then((res) => res.json())
    setUser(res.data.currentUser)
    setDepart(res.data.depart.desc)
  })()
}, [])

if ( grade == 0) {
return (
  <div className={isOpen === true ? styles.show_nav : styles.hide_nav}>
    <div className={styles.navigation} style={mode === 'light' ? {backgroundColor: '#fff'} : {backgroundColor: '#2F3146'}}>
      <div className={styles.logo} style={mode === 'light' ? {color: '#191919', borderBottomColor: '#f1f1f1'} :  {color: '#fff', borderBottomColor: '#2A2C42'}}>
        Gbsw Logo
      </div>
      <div className={styles.profile}>
        <div>
          <div className={styles.left}> 
            <img src={profile} alt="ProfileIcon" />
            <div>
              <h4 style={mode === 'light' ? {color: '#191919'} :  {color: '#fff'}}>{user ? user.name : '로딩중...'}</h4>
              <span style={mode === 'light' ? {color: '#ACB2CB'} :  {color: '#6F738E'}}>{depart ? depart : '로딩중...'}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listsBox}>
      <div className={lists === 1 ? styles.list : null} to="" onClick={() => setLists(1)}>
        <p className={styles.tag} style={mode === 'light' ? {color: '#adabab'} :  {color: '#6F738E'}} >학생 페이지<HiChevronDown size={18} /></p>
        <ul className={mode === 'light' ? styles.light_ul : styles.dark_ul}>  
          <Link className={page === 1 ? mode === 'light' ? styles.light_checked : styles.dark_checked : null} to="" onClick={() => onChangePage(1)}><li><p>신청 리스트</p></li></Link>
          <Link className={page === 2 ? mode === 'light' ? styles.light_checked : styles.dark_checked : null} to="" onClick={() => onChangePage(2)}><li><p>명예의 전당</p></li></Link>
          <Link className={page === 3 ? mode === 'light' ? styles.light_checked : styles.dark_checked : null} to="" onClick={() => onChangePage(3)}><li><p>3C 인증제</p></li></Link>
          <Link className={page === 5 ? mode === 'light' ? styles.light_checked : styles.dark_checked : null} to="" onClick={() => onChangePage(4)}><li><p>프로필</p></li></Link>
        </ul>
      </div>
      </div>
      <div className={mode === 'light' ? styles.light_chart : styles.dark_chart}><Chart mode={mode}/></div>
      <div className={styles.outBox}>
        <div><Link to="/resetpw">비밀번호 재설정</Link></div>
        <div><Link to="/logout">로그아웃</Link></div>
      </div>
    </div>
  </div>
)
} 
if (grade == 1) {
  return (
    <div className={isOpen === true ? styles.show_nav : styles.hide_nav}>
      <div className={styles.navigation} style={mode === 'light' ? {backgroundColor: '#fff'} : {backgroundColor: '#2F3146'}}>
        <div className={styles.logo} style={mode === 'light' ? {color: '#191919', borderBottomColor: '#f1f1f1'} :  {color: '#fff', borderBottomColor: '#2A2C42'}}>
          Gbsw Logo
        </div>
        <div className={styles.profile}>
          <div>
            <div className={styles.left}> 
              <img src={profile} alt="ProfileIcon" />
              <div>
                <h4 style={mode === 'light' ? {color: '#191919'} :  {color: '#fff'}}>{user ? user.name : '로딩중...'}님</h4>
                <span style={mode === 'light' ? {color: '#ACB2CB'} :  {color: '#6F738E'}}>교사</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.listsBox}>
        <div className={lists === 1 ? styles.list : null} to="" onClick={() => setLists(1)}>
          <p className={styles.tag} style={mode === 'light' ? {color: '#adabab'} :  {color: '#6F738E'}} >교사 페이지<HiChevronDown size={18} /></p>
          <ul className={mode === 'light' ? styles.light_ul : styles.dark_ul}>  
            <Link className={page === 1 ? mode === 'light' ? styles.light_checked : styles.dark_checked : null} to="" onClick={() => onChangepage(1)}><li><p>신청 리스트</p></li></Link>
            <Link className={page === 2 ? mode === 'light' ? styles.light_checked : styles.dark_checked : null} to="" onClick={() => onChangepage(2)}><li><p>학생 리스트</p></li></Link>
            <Link className={page === 3 ? mode === 'light' ? styles.light_checked : styles.dark_checked : null} to="" onClick={() => onChangepage(3)}><li><p>명예의 전당</p></li></Link>
            <Link className={page === 4 ? mode === 'light' ? styles.light_checked : styles.dark_checked : null} to="" onClick={() => onChangepage(4)}><li><p>3C 인증제</p></li></Link>
            <Link className={page === 5 ? mode === 'light' ? styles.light_checked : styles.dark_checked : null} to="" onClick={() => onChangepage(5)}><li><p>프로필</p></li></Link>
          </ul>
        </div>
        </div>
        <div className={styles.outBox}>
          <div><Link to="/resetpw">비밀번호 재설정</Link></div>
          <div><Link to="/logout">로그아웃</Link></div>
        </div>
      </div>
    </div>
  )
} 
if (grade == 2) {
  return (
    <div className={isOpen === true ? styles.show_nav : styles.hide_nav}>
      <div className={styles.navigation} style={mode === 'light' ? {backgroundColor: '#fff'} : {backgroundColor: '#2F3146'}}>
        <div className={styles.logo} style={mode === 'light' ? {color: '#191919', borderBottomColor: '#f1f1f1'} :  {color: '#fff', borderBottomColor: '#2A2C42'}}>
          Gbsw Logo
        </div>
        <div className={styles.profile}>
          <div>
            <div className={styles.left}> 
              <img src={profile} alt="ProfileIcon" />
              <div>
                <h4 style={mode === 'light' ? {color: '#191919'} :  {color: '#fff'}}>{user ? user.name : '로딩중...'}님</h4>
                <span style={mode === 'light' ? {color: '#ACB2CB'} :  {color: '#6F738E'}}>관리자</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.listsBox}>
        <div className={lists === 1 ? styles.list : null} to="" onClick={() => setLists(1)}>
          <p className={styles.tag} style={mode === 'light' ? {color: '#adabab'} :  {color: '#6F738E'}} >사용자 페이지<HiChevronDown size={18} /></p>
          <ul className={mode === 'light' ? styles.light_ul : styles.dark_ul}>  
            <Link className={page === 1 ? mode === 'light' ? styles.light_checked : styles.dark_checked : null} to="" onClick={() => onChangePage(1)}><li><p>신청 리스트</p></li></Link>
            <Link className={page === 2 ? mode === 'light' ? styles.light_checked : styles.dark_checked : null} to="" onClick={() => onChangePage(2)}><li><p>학생 리스트</p></li></Link>
            <Link className={page === 3 ? mode === 'light' ? styles.light_checked : styles.dark_checked : null} to="" onClick={() => onChangePage(3)}><li><p>명예의 전당</p></li></Link>
            <Link className={page === 4 ? mode === 'light' ? styles.light_checked : styles.dark_checked : null} to="" onClick={() => onChangePage(4)}><li><p>3C 인증제</p></li></Link>
          </ul>
        </div>
        <div className={lists === 2 ? styles.list : null} to="" onClick={() => setLists(2)}>
          <p className={styles.tag} style={mode === 'light' ? {color: '#adabab'} :  {color: '#6F738E'}} >관리자 페이지<HiChevronDown size={18} /></p>
          <ul className={mode === 'light' ? styles.light_ul : styles.dark_ul}>  
            <Link className={page === 5 ? mode === 'light' ? styles.light_checked : styles.dark_checked : null} to="/stat" onClick={() => onChangePage(5)}><li><p>통계분석</p></li></Link>
            <Link className={page === 6 ? mode === 'light' ? styles.light_checked : styles.dark_checked : null} to="/scor" onClick={() => onChangePage(6)}><li><p>계정관리</p></li></Link>
            <Link className={page === 7 ? mode === 'light' ? styles.light_checked : styles.dark_checked : null} to="" onClick={() => onChangePage(7)}><li><p>점수 영역관리</p></li></Link>
            <Link className={page === 8 ? mode === 'light' ? styles.light_checked : styles.dark_checked : null} to="" onClick={() => onChangePage(8)}><li><p>학생 등록</p></li></Link>
          </ul>
        </div>
        </div>

        <div className={styles.outBox}>
          <div><Link to="/resetpw">비밀번호 재설정</Link></div>
          <div><Link to="/logout">로그아웃</Link></div>
        </div>
      </div>
    </div>
  )
}
} 

export default Navigation