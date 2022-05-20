import React, { useState } from "react";
import styles from '../css/Login.module.scss'
import logo from '../img/logo.png'

const Login = ({ isLogin }) => {
  const [ id, setId ] = useState('');
  const [ pw, setPw ] = useState('');

  const onSubmit = (e) => {
    e.preventDefault()
    if(id == 'aaa') {
      if(pw =='aaa') {
        isLogin(true)
      } else {
        alert("아이디 혹은 비밀번호가 틀렸습니다.")
      }
    } else {
      alert("아이디 혹은 비밀번호가 틀렸습니다.")
    }
  }

  return (
    <div>
      <div>
        <div className={styles.loginForm}>
          <img className={styles.logo} src={logo} />
          <div className={styles.loginBox}>
            <form onSubmit={onSubmit}>
              <h1>로그인</h1>
              <input type='text' name="id" onChange={(e) => setId(e.target.value)} placeholder='id'/>
              <input type='password' name="pw" onChange={(e) => setPw(e.target.value)} placeholder='password'/>
              <input type='submit' className={styles.loginBtn} value='로그인' />
            </form>
          </div>
          <div className={styles.subBox}>
            <div className={styles.box}>
              <h1>3C 인증제</h1>
              <p>경북소프트웨어고등학교의 교육목표인 미래사회를<br />
                이끌어 나갈 SW직업인 양성을 위한 3C 핵심가치와<br />
                6대 핵심역량을 길러준다.</p>
                <a><button>알아보기</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login