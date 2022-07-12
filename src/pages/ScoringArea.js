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
} from "react-icons/hi";
import { FaPlus } from "react-icons/fa";
import Select from "react-select";
import styles from "../css/ScoringArea.module.scss";
import StudentSubmitPage from "./sub/StudentSubmitPage"

const ScoringArea = ({ mode, isOpen }) => {

  return (
    <div>
      <div className={isOpen === true ? styles.open_main : styles.hide_main}>
        <div
          className={styles.listHeader}
          style={mode === "light" ? { color: "#191919" } : { color: "#fff" }}
          >
          <div className={styles.title}>
            사용자 페이지/
            <span style={{ color: "#0684c4" }}>계정관리</span>
          </div>
        </div>
        <div className={styles.listBox}>
          <div className={styles.Box} style={mode === 'light' ? {background: '#fff'} : {background: '#2F3146'}}>
            <div className={styles.listBoxHeader}>
              <div
                style={
                  mode === "light" ? { color: "#191919" } : { color: "#fff" }
                }
              >
                계정관리 
              </div>
            </div>
            <div className={styles.contents}></div>
            <div className={styles.contentBox}>
              <div style={mode === 'light' ? {background: '#F3F5F7'} : {background: '#2B2E44'}}>
                <div className={styles.sub}>표시하기</div>
                <div className={styles.box1}>
                  <h4>역할 이름</h4>
                  <input type="text"></input>
                </div>
              </div>
              <div style={mode === 'light' ? {background: '#F3F5F7'} : {background: '#2B2E44'}}>
                <div className={styles.sub}>권한</div>
              </div>
              <div style={mode === 'light' ? {background: '#F3F5F7'} : {background: '#2B2E44'}}>
                <div className={styles.sub}>맵버 관리</div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default ScoringArea;