import React, { useState } from "react";
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
import styles from "../../css/AdminMain.module.scss";

const SubmitPage = ({ mode }) => {
const [fullChecked, setFullchecked] = useState(false);
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
    setItems([...items.map((v) => ({ ...v, checked: !fullChecked }))]);
    setFullchecked(!fullChecked);
  };
    return (
        <>
        <div className={styles.navbar} style={mode === 'light' ? {background: '#F3F5F7'} : {background: '#2B2E44'}}>
            <div>
              <a href="" style={mode === 'light' ? {color: '#ACB2CB'} : {color: '#6F738E'}}>
                <div>
                <FaCheck
                  style={{ position: "relative", top: "3px" }}
                  size={22}
                />{" "}
                </div>
                수락하기
              </a>
            </div>
            <div>
              <a href="" style={mode === 'light' ? {color: '#ACB2CB'} : {color: '#6F738E'}}>
                <div>
                <FaPlus
                  style={{ position: "relative", top: "3px", transform: 'rotate(-45deg)' }}
                  size={24}
                />{" "}
                </div>
                거절하기
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
                교사 리스트
              </div>
              <div className={styles.div}>
                <a href="">
                  <HiCheck
                    style={{ position: "relative", top: "3px" }}
                    size={18}
                  />{" "}
                  수락하기
                </a>
                <a href="">
                  <HiX
                    style={{ position: "relative", top: "3px"}}
                    size={16}
                  />{" "}
                  거절하기
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
                  <td className={styles.checkBox}>
                    <div>
                      <input
                        checked={fullChecked}
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
                  <td className={styles.user}>
                    <span>신청인</span>
                    <div
                      className={
                        mode === "light" ? styles.light_tag : styles.dark_tag
                      }
                    >
                      신청인/분류
                    </div>
                  </td>
                  <td className={styles.class}>학과</td>
                  <td className={styles.fic}>분류</td>
                  <td className={styles.rate}>달성률</td>
                </tr>
                <tr>
                  <td className={styles.file}>파일</td>
                  <td className={styles.day}>
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
                      <td className={styles.checkBox}>
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
                        className={styles.user}
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
                      <td className={styles.class}>{item.department}</td>
                      <td className={styles.fic}>
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
                      <td className={styles.rate}>
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
                      <td className={styles.file}>
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
                      <td className={styles.day}>{item.date}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </>
    )
}

export default SubmitPage;