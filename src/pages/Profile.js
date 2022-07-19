import React, { useState, useSessionStorag, useEffect } from "react";
import styles from "../css/Profile.module.scss";
import useSessionStorage from "../components/UseSessionStorage";
import Chart from "../components/Chart";


const Profile = ({ mode, isOpen, page }) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    (async () => {
      const data2 = await fetch('/api/auth/v1/@me')
        .then((res) => res.json())

      setData(data2?.data)
    })()
  }, [page])

  return (
      <div className={isOpen === true ? styles.open_main : styles.hide_main}>
        <div className={styles.listBox}>
            <div className={styles.Box} style={mode === 'light' ? {background: '#fff'} : {background: '#2F3146'}}>
              <div className={styles.listBoxHeader}>
                <div style={mode === 'light' ? {color: '#191919'} : {color: '#fff'}}>프로필</div>
              </div>
              <div className={styles.boxHeader} style={mode === 'light' ? {color: '#ACB2CB', borderColor: '#ACB2CB'} : {color: '#6F738E', borderColor: '#6F738E'}}>
                <span className={styles.name}>{data?.currentUser?.userid}</span>
                <span className={styles.class}>{data?.depart?.desc}</span>
              </div>
              <div className={styles.context}>
                <div style={mode === 'light' ? {color: '#8993A7'} : {color: '#8C8EA0'}}>
                  <h4 style={mode === 'light' ? {color: '#ACB2CB'} : {color: '#6F738E'}}>기본정보</h4>
                  <div>이름: {data?.currentUser?.userid}</div>
                  <div>학과: {data?.depart?.desc}</div>
                  <div>아이디: {data?.currentUser?.name}</div>
                  <div>전화번호: {data?.currentUser?.phone}</div>
                </div>
              </div>
            </div>
        </div>
      </div>
  );
};
export default Profile;
