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
import styles from "../css/StudentMain.module.scss";
import StudentSubmitPage from "./sub/StudentSubmitPage";

const StudentMain = ({ mode, isOpen }) => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState(null);
  const [filterStr, setFilterStr] = useState("all");
  const filterOptions = [
    { value: "all", label: "전체보기" },
    { value: "open", label: "열림" },
    { value: "closed", label: "닫침" },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  function onFilterChange(e) {
    setFilterStr(e.value);
    fetchData();
  }

  async function fetchData() {
    let str = "";
    if (filterStr === "open") {
      str = "?closed=false";
    }
    if (filterStr === "closed") {
      str = "?closed=true";
    }

    setLoading(true)
    const res = await fetch("/api/board/v1/posts/@me" + str).then((res) =>
      res.json()
    );
    setLoading(false)

    if (!res) alert("제출 목록을 가져오는데 예상치 못한 오류가 발생했습니다.");

    setItems(
      res.data.posts.map((post) => ({
        number: post.postId,
        name: "2204김무일",
        department: "소프트웨어개발과",
        area: "도전역량",
        classification1: "프로젝트 산출물",
        classification2: "자율형 프로젝트",
        achievement_rate: 40,
        file: 1,
        date: "2022-04-25",
      }))
    );
  }

  return (
    <div>
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
      <div className={isOpen === true ? styles.open_main : styles.hide_main}>
        <div
          className={styles.listHeader}
          style={mode === "light" ? { color: "#191919" } : { color: "#fff" }}
        >
          <div className={styles.title}>
            사용자 페이지/
            <span style={{ color: "#0684c4" }}>신청 리스트</span>
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
          <StudentSubmitPage mode={mode}/>
        </div>
      </div>
    </div>
  );
};

export default StudentMain;