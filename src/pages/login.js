import React from "react";
import '../css/login.css'

const login = () => {
  return (
    <div>
      <div>
      <div className="login-form">
        <div className="logo" />
        <div className="login-box">
          <form action="#">
            <h1>로그인</h1>
            <input type='text' placeholder='id'/>
            <input type='password' placeholder='password'/>
            <input type='submit' className="login-btn" placeholder='로그인'/>
          </form>
        </div>
      <div className="sub-box">
        <div className="box">
          <h1>3C 인증제</h1>
          <p>경북소프트웨어고등학교의 교육목표인 미래사회를<br />
             이끌어 나갈 SW직업인 양성을 위한 3C 핵심가치와<br />
             6대 핵심역량을 길러준다.</p>
          <button>알아보기</button>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default login