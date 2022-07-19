import React, { useState, useEffect } from "react";
import styles from "../css/Login.module.scss";
import logo from "../img/logo.png";
import { Link } from 'react-router-dom'

const Login = ({ isLogin, setGrade }) => {
  const [loading, setLoading] = useState(true)
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [message, setMessage] = useState(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true)
    const res = await fetch("/api/auth/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: id,
        password: pw,
      }),
    }).then((res) => res.status === 403 ? (sessionStorage.clear() || window.location.reload()) : res.json())
      .catch(() => ({ success: false }));
    setLoading(false)

    if (!res.success) {
      setMessage("아이디 또는 비밀번호가 일치하지 않습니다.");
      return;
    }

    document.cookie = `SESSION_TOKEN=${res.data.token}`;

    setLoading(true)
    const me = await fetch("/api/auth/v1/@me").then((res) => res.status === 403 ? (sessionStorage.clear() || window.location.reload()) : res.json());
    if (me.data.permissions.includes("ADMINISTRATOR")) {
      setGrade(2);
    } else if (me.data.permissions.includes("TEACHER")) {
      setGrade(1);
    } else {
      setGrade(0);
    }

    setLoading(false)
    isLogin(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 300)
  }, [])

  return (
    <div className={styles.container}>
      {loading && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100vw', height: '100vh',
          zIndex: 100, backgroundColor: '#00000099', 
          display: 'flex', justifyContent: 'center', 
          alignItems: 'center', color: 'white' }}>
          처리중입니다...
        </div>
      )}
      <div className={styles.loginForm}>
        <div className={styles.loginBox}>
          <form onSubmit={onSubmit}>
            <img className={styles.logo} src={logo} />
            <h1>로그인</h1>
            <input
              className={styles.in}
              type="text"
              name="id"
              onChange={(e) => setId(e.target.value)}
              placeholder="Username"
            />
            <input
              type="password"
              name="pw"
              onChange={(e) => setPw(e.target.value)}
              placeholder="Password"
            />
            {message && <p className={styles.error}>{message}</p>}
            <input type="submit" className={styles.loginBtn} value="로그인" />
          </form>
        </div>
        <div className={styles.subBox}>
          <div className={styles.box}>
            <h1>3C 인증제</h1>
            <p>
              경북소프트웨어고등학교의 교육목표인 미래사회를
              <br />
              이끌어 나갈 SW직업인 양성을 위한 3C 핵심가치와
              <br />
              6대 핵심역량을 길러준다.
            </p>
            <a>
              <Link to="/introduce"><button>알아보기</button></Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
