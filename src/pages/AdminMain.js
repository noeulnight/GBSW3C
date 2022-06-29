import React, { useStat, useSessionStorag, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import {
  HiChevronLeft,
  HiChevronRight,
  HiChevronDown,
  HiPlus,
  HiX,
  HiCheck,
} from "react-icons/hi";
import { FaCheck, FaPlus } from "react-icons/fa";
import styles from "../css/AdminMain.module.scss";
import SubmitPage from "./sub/SubmitPage";
import StudentListPage from "./sub/StudentListPage";
import useSessionStorage from "../components/UseSessionStorage";

const TeacherMain = ({ mode, isOpen, page }) => {
  const [active, setActive] = useSessionStorage("active")

  useEffect(() => {
    console.log('active page', page);
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
            사용자 페이지/
            <span style={{ color: "#0684c4" }}>
              {page === 1 && "신청 리스트"}
              {page === 2 && "학생 리스트"}
              {page === 3 && "명예의 전당"}
              {page === 4 && "3C 인증제"}
              {page === 5 && "프로필"}
              {page === 6 && "통계분석"}
              {page === 7 && "계정관리"}
              {page === 8 && "점수 영역관리"}
              {page === 9 && "학생 등록"}
            </span>
          </div>
          <div className={styles.page}>
            <div
              className={
                mode === "light" ? styles.light_page : styles.dark_page
              }
            >
              <span>페이지</span>
              <input
                maxLength={3}
                style={
                  mode === "light"
                    ? {
                        background: "#FFFFFF",
                        border: "1px solid #ACB2CB",
                        color: "#8993A7",
                      }
                    : {
                        background: "#2F3146",
                        border: "1px solid #6F738E",
                        color: "#6F738E",
                      }
                }
                type="text"
                defaultValue="1"
              />{" "}
              / 1
            </div>
            <div className={styles.btn}>
              <label
                style={
                  mode === "light"
                    ? { backgroundColor: "#FFFFFF", color: "#ACB2CB" }
                    : { backgroundColor: "#2F3146", color: "#6F738E" }
                }
                className={styles.left}
              >
                <HiChevronLeft size={24} />
              </label>
              <label
                style={
                  mode === "light"
                    ? { backgroundColor: "#0684c4", color: "#F3F5F7" }
                    : { backgroundColor: "#0684c4", color: "#2B2E44" }
                }
                className={styles.right}
              > 
                <HiChevronRight size={24} /> 
              </label>
            </div>
          </div>
        </div>
        <div className={styles.listBox}>
          { page === 1 && <SubmitPage mode={mode}/> }
          { page === 2 && <StudentListPage mode={mode}/> }
          { page === 3 && <SubmitPage mode={mode}/> }
          { page === 4 && <SubmitPage mode={mode}/> }
          { page === 5 && <p>easter egg</p> }
          { page === 7 && <SubmitPage mode={mode}/> }
          { page === 8 && <SubmitPage mode={mode}/> }
          { page === 9 && <SubmitPage mode={mode}/> }
        </div>
      </div>
    </div>
  );
};
export default TeacherMain;
