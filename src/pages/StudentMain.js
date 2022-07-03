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
  const [depart, setDepart] = useState('로딩중...')
  const [page, setPage] = useState(0)
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
    const me = await fetch(`/api/auth/v1/@me`)
      .then((res) => res.json())

    const depart = await fetch(`/api/auth/v1/departs?depid=${me.data.currentUser.depid}`)
      .then((res) => res.json())
    setDepart(depart.data.desc)
  }

  async function setPageFn (v) {
    fetchData()
    setPage(v)
  }

  return (
    <div>
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
              {page + 1}
            </div>
            <div className={styles.btn}>
              <label
                style={
                  page < 1
                    ? mode === "light"
                      ? { backgroundColor: "#FFFFFF", color: "#ACB2CB" }
                      : { backgroundColor: "#2F3146", color: "#6F738E" }
                    : mode === "light"
                      ? { backgroundColor: "#0684c4", color: "#F3F5F7" }
                      : { backgroundColor: "#0684c4", color: "#2B2E44" }
                }
                className={styles.left}
                onClick={() => page < 1 ? undefined : setPageFn(page - 1)}
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
                onClick={() => setPageFn(page + 1)}
              >
                <HiChevronRight size={24} />
              </label>
            </div>
          </div>
        </div>
        <div className={styles.listBox}>
          <StudentSubmitPage key={page + depart} depart={depart} page={page} mode={mode}/>
        </div>
      </div>
    </div>
  );
};

export default StudentMain;