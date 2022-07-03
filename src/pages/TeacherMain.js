import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import {
  HiChevronLeft,
  HiChevronRight,
  HiChevronDown,
  HiPlus,
  HiCheck,
} from "react-icons/hi";
import styles from "../css/TeacherMain.module.scss";

const TeacherMain = ({ mode, isOpen }) => {
  const [fullCheched, setFullchecked] = useState(false);
  const [items, setItems] = useState([
    {
      name: "2204김무일",
      department: "소프트웨어개발과",
      area: "실무역량",
      classification1: "자격증",
      classification2: "정보처리기능사",
      achievement_rate: 25,
      date: "2022-04-25",
      checked: false,
    },
    {
      name: "2204김무일",
      department: "소프트웨어개발과",
      area: "실무역량",
      classification1: "자격증",
      classification2: "정보처리기능사",
      achievement_rate: 25,
      date: "2022-04-25",
      checked: false,
    },
    {
      name: "2204김무일",
      department: "소프트웨어개발과",
      area: "실무역량",
      classification1: "자격증",
      classification2: "정보처리기능사",
      achievement_rate: 40,
      file: 1,
      date: "2022-04-25",
      checked: false,
    },
  ]);

  const onCheck = (index) => () => {
    items[index].checked = !items[index].checked;
    setItems([...items]);
    setFullchecked(false);
  };

  const onFullCheck = () => {
    setItems([...items.map((v) => ({ ...v, checked: !fullCheched }))]);
    setFullchecked(!fullCheched);
  };

  return (
    <div>
      <div className={isOpen === true ? styles.open_main : styles.hide_main}>
        <div
          className={styles.listHeader}
          style={mode === "light" ? { color: "#191919" } : { color: "#fff" }}
        >
          <div className={styles.title}>
            교사 페이지/
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
          <StudentSubmitPage key={page} depart={depart} page={page} mode={mode}/>
        </div>
      </div>
    </div>
  );
};

export default TeacherMain;
