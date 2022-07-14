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
import styles from "../css/Statistics.module.scss";
import StudentSubmitPage from "./sub/StudentSubmitPage"

const Statistic = ({ mode, isOpen }) => {

  return (
    <div className={styles.listBox}>
      <div className={styles.Box} style={mode === 'light' ? {background: '#fff'} : {background: '#2F3146'}}>
        <div className={styles.listBoxHeader}>
          <div
            style={
              mode === "light" ? { color: "#191919" } : { color: "#fff" }
            }
          >
            통계분석
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Statistic;