import React, { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import {
  HiChevronLeft,
  HiChevronRight,
  HiChevronDown,
  HiPlus,
  HiRefresh,
  HiReply,
} from "react-icons/hi";
import { FaPlus } from "react-icons/fa";

import styles from "../css/StudentMain.module.scss";

const StudentMain = ({ mode, isOpen }) => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/board/v1/posts/@me").then((res) =>
        res.json()
      );

      if (!res)
        alert("제출 목록을 가져오는데 예상치 못한 오류가 발생했습니다.");

      setItems(
        res.data.posts.map((post) => ({
          number: "0003",
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
    })();
  }, []);

  return (
    <div>
      <div className={isOpen === true ? styles.open_main : styles.hide_main}>
        <div
          className={styles.listHeader}
          style={mode === "light" ? { color: "#191919" } : { color: "#fff" }}
        >
          <div className={styles.title}>
            학생 페이지/
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
          <div className={styles.navbar} style={mode === 'light' ? {background: '#F3F5F7'} : {background: '#2B2E44'}}>
            <div>
              <a href="" style={mode === 'light' ? {color: '#ACB2CB'} : {color: '#6F738E'}}>
                <div>
                <FaPlus
                  style={{ position: "relative", top: "3px" }}
                  size={24}
                />{" "}
                </div>
                추가신청
              </a>
            </div>
          </div>
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
                신청 리스트
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
                  <td>번호</td>
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
              {items === null && (
                <tbody
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: 10,
                  }}
                >
                  <HiRefresh /> 신청 내역을 불러오는 중입니다.
                </tbody>
              )}
              {items !== null && items?.length < 1 && (
                <tbody
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: 10,
                  }}
                >
                  신청 내역이 없습니다.
                </tbody>
              )}
              {items !== null &&
                items?.length > 0 &&
                items.map((item, index) => {
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
                        <td style={{ color: "#0684c4" }}>{item.number}</td>
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

export default StudentMain;
