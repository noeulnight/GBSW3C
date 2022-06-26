import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import {
  HiChevronLeft,
  HiChevronRight,
  HiChevronDown,
  HiPlus,
  HiCheck,
} from "react-icons/hi";
import styles from "../css/AdminMain.module.scss";

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
          <div
            style={
              mode === "light"
                ? { background: "#FFFFFF" }
                : { background: "#2F3146" }
            }
            className={styles.Box}
          >
            <div className={styles.listBoxHeader}>
              <div
                style={
                  mode === "light" ? { color: "#191919" } : { color: "#fff" }
                }
              >
                교사 리스트
              </div>
              <div className={styles.div}>
                <a href="">
                  <HiPlus
                    style={{ position: "relative", top: "3px" }}
                    size={18}
                  />{" "}
                  추가신청
                </a>
                <span
                  style={
                    mode == "light"
                      ? { border: "1px solid #ACB2CB", color: "#ACB2CB" }
                      : { border: "1px solid #6F738E", color: "#6F738E" }
                  }
                  className={styles.btn}
                >
                  전체보기
                  <HiChevronDown size={18} />
                </span>
              </div>
            </div>
            <table>
              <thead
                style={
                  mode === "light"
                    ? { background: "#F3F5F7", color: "#ACB2CB" }
                    : { background: "#2B2E44", color: "#6F738E" }
                }
              >
                <tr>
                  <td>
                    <div>
                      <input
                        checked={fullCheched}
                        onChange={onFullCheck}
                        type="checkbox"
                        id="ckeckBox"
                      />
                      <label
                        htmlFor="ckeckBox"
                        className={
                          mode === "light" ? styles.light_ck : styles.dark_ck
                        }
                      >
                        <HiCheck size={18} />
                      </label>
                    </div>
                  </td>
                  <td>
                    <span>신청인</span>
                    <div
                      className={
                        mode === "light" ? styles.light_tag : styles.dark_tag
                      }
                    >
                      신청인/분류
                    </div>
                  </td>
                  <td>학과</td>
                  <td>영역</td>
                  <td>분류</td>
                  <td>달성률</td>
                </tr>
                <tr>
                  <td>파일</td>
                  <td>
                    신청일
                    <HiChevronDown
                      size={14}
                      style={{ position: "relative", left: "3px", top: "2px" }}
                    />
                  </td>
                </tr>
              </thead>
              {items.map((item, index) => {
                return (
                  <tbody
                    key={index}
                    style={
                      mode === "light"
                        ? { color: "#ACB2CB" }
                        : { color: "#6F738E" }
                    }
                  >
                    <tr>
                      <td>
                        <div>
                          <input
                            type="checkbox"
                            onChange={onCheck(index)}
                            checked={item.checked}
                            id={index}
                          />
                          <label
                            htmlFor={index}
                            className={
                              mode === "light"
                                ? styles.light_ck
                                : styles.dark_ck
                            }
                          >
                            <HiCheck size={18} />
                          </label>
                        </div>
                      </td>{" "}
                      <td
                        style={
                          mode === "light"
                            ? { color: "#8993A7" }
                            : { color: "#8C8EA0" }
                        }
                      >
                        {item.name}
                        <div
                          style={
                            mode === "light"
                              ? { color: "#ACB2CB" }
                              : { color: "#6F738E" }
                          }
                        >
                          {item.classification2}
                        </div>
                      </td>
                      <td>{item.department}</td>
                      <td>{item.area}</td>
                      <td>
                        {item.classification1}
                        <div
                          style={
                            mode === "light"
                              ? { color: "#8993A7" }
                              : { color: "#8C8EA0" }
                          }
                        >
                          {item.classification2}
                        </div>
                      </td>
                      <td>
                        <span>
                          {item.achievement_rate}%
                          <ProgressBar
                            completed={item.achievement_rate}
                            height={"13px"}
                            width={"200px"}
                            labelSize={"0px"}
                            bgColor={"rgba(6, 132, 196, 0.77)"}
                            borderRadius={"3px"}
                            baseBgColor={
                              mode === "light" ? "#f1f1f1" : "#383850"
                            }
                          />
                          {item.achievement_rate2}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div
                          className={
                            item.file != null
                              ? mode === "light"
                                ? styles.light_file
                                : styles.dark_file
                              : null
                          }
                        ></div>
                      </td>
                      <td>{item.date}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherMain;
