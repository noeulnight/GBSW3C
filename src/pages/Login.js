import React, { useState } from "react";
import styles from "../css/Login.module.scss";
import logo from "../img/logo.png";

const Login = ({ isLogin, setGrade }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [message, setMessage] = useState(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    const res = await fetch("/api/auth/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: id,
        password: pw,
      }),
    }).then((res) => res.json());

    if (!res.success) {
      setMessage("아이디 또는 비밀번호가 일치하지 않습니다.");
      return;
    }

    document.cookie = `SESSION_TOKEN=${res.data.token}`;

    const me = await fetch("/api/auth/v1/@me").then((res) => res.json());
    if (me.data.permissions.includes("ADMINISTRATOR")) {
      setGrade(2);
    } else if (me.data.permissions.includes("VIEW_REQUESTS")) {
      setGrade(1);
    } else {
      setGrade(0);
    }

    isLogin(true);
  };

  return (
    <div className={styles.container}>
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
              placeholder="id"
            />
            <input
              type="password"
              name="pw"
              onChange={(e) => setPw(e.target.value)}
              placeholder="password"
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
              <button>알아보기</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
