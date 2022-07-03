import React, { useStat, useSessionStorag, useEffect } from "react";
import styles from "../css/Profile.module.scss";
import useSessionStorage from "../components/UseSessionStorage";
import Chart from "../components/Chart";


const Profile = ({ mode, isOpen, page }) => {
  const [active, setActive] = useSessionStorage("active")

  useEffect(() => {
    setActive(page)
  }, [page])

  return (
    <div>
      <div className={isOpen === true ? styles.open_main : styles.hide_main}>
        <div
          className={styles.listHeader}
          style={mode === "light" ? { color: "#191919" } : { color: "#fff" }}
        >
          <div className={styles.title}>
            학생 페이지/
            <span style={{ color: "#0684c4" }}>
            프로필
            </span>
          </div>
          </div>
        <div className={styles.listBox}>
            <div className={styles.Box} style={mode === 'light' ? {background: '#fff'} : {background: '#2F3146'}}>
              <div className={styles.listBoxHeader}>
                <div style={mode === 'light' ? {color: '#191919'} : {color: '#fff'}}>프로필</div>
              </div>
            </div>
            <div className={styles.Box} style={mode === 'light' ? {background: '#fff'} : {background: '#2F3146'}}>
              <div className={styles.listBoxHeader}>
                <div style={mode === 'light' ? {color: '#191919'} : {color: '#fff'}}>비밀번호 재설정</div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
