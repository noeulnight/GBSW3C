import React, { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from "react-router-dom";
import {
  HiChevronLeft,
  HiChevronRight,
  HiChevronDown,
  HiPlus,
  HiRefresh,
  HiReply,
  HiSearch,
} from "react-icons/hi";
import { FaPlus } from "react-icons/fa";
import Select from "react-select";
import styles from "../css/Account.module.scss";
import StudentSubmitPage from "./sub/StudentSubmitPage"

const Account = ({ mode, isOpen }) => {
  return (
    <div className={styles.listBox}>
      <div className={styles.Box} style={mode === 'light' ? {background: '#fff'} : {background: '#2F3146'}}>
        <div className={styles.listBoxHeader}>
          <div
            style={mode === "light" ? { color: "#191919" } : { color: "#fff" }}
          >
            계정관리 
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.content01}>
            <div className={styles.role}> 
              <div className={styles.title} style={mode === 'light' ? {color: '#8993A7'} : {color: '#8C8EA0'}}>역할 이름</div> 
              <input type="text" placeholder="새 역할" style={mode === 'light' ? {borderColor: '#ACB2CB', color: "#191919", background: '#F3F5F7'} : {borderColor: '#6F738E', color: '#fff', background: '#2B2E44'}} />
            </div>
            <div className={styles.title} style={mode === 'light' ? {color: '#8993A7'} : {color: '#8C8EA0'}}>서버 일반 권한</div> 
            <div className={styles.context}>
              <div className={styles.soTitle}>
                <span style={mode === 'light' ? {color: '#8993A7'} : {color: '#8C8EA0'}}>먼가먼가</span>
                <input type="checkbox" id="ckbox01" />
                <label htmlFor="ckbox01" className={mode === 'light' ? styles.light_ck : styles.dark_ck}></label>
              </div>
              <div style={mode === 'light' ? {color: '#ACB2CB'} : {color: '#6F738E'}}>사용자에게 먼가먼가와 관련된 권한을 허용합니다.</div>
            </div>
            <div className={styles.context}>
              <div className={styles.soTitle}>
                <span style={mode === 'light' ? {color: '#8993A7'} : {color: '#8C8EA0'}}>먼가먼가</span>
                <input type="checkbox" id="ckbox02" />
                <label htmlFor="ckbox02" className={mode === 'light' ? styles.light_ck : styles.dark_ck}></label>
              </div>
              <div style={mode === 'light' ? {color: '#ACB2CB'} : {color: '#6F738E'}}>사용자에게 먼가먼가와 관련된 권한을 허용합니다.</div>
            </div>
            <div className={styles.context}>
              <div className={styles.soTitle}>
                <span style={mode === 'light' ? {color: '#8993A7'} : {color: '#8C8EA0'}}>먼가먼가</span>
                <input type="checkbox" id="ckbox03" />
                <label htmlFor="ckbox03" className={mode === 'light' ? styles.light_ck : styles.dark_ck}></label>
              </div>
              <div style={mode === 'light' ? {color: '#ACB2CB'} : {color: '#6F738E'}}>사용자에게 먼가먼가와 관련된 권한을 허용합니다.</div>
            </div>
          </div>
          <div className={styles.content02}>
            <div className={styles.member}>
              <div className={styles.title} style={mode === 'light' ? {color: '#8993A7'} : {color: '#8C8EA0'}}>권한 관리</div> 
              <div className={styles.context}>
                <div className={styles.search}>
                  <input type="text" placeholder="사용자 검색하기" style={mode === 'light' ? {borderColor: '#ACB2CB', color: "#191919", background: '#F3F5F7'} : {borderColor: '#6F738E', color: '#fff', background: '#2B2E44'}} />
                </div>
                <div className={styles.btn}>
                  사용자 추가
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;