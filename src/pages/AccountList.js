import React, { useEffect, useState } from "react";
import useSessionStorage from "../components/UseSessionStorage"
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
  HiCheck,
  HiTrash,
  HiPencil
} from "react-icons/hi";
import { FaCheck, FaPlus, FaTrashAlt } from "react-icons/fa";
import Select from "react-select";
import styles from "../css/AccountList.module.scss";
import StudentSubmitPage from "./sub/StudentSubmitPage"

const ScoringArea = ({ mode, isOpen, page, onChangePage }) => {
  const [lists, setLists] = useSessionStorage("lists", 1)
  const [titles, setTitles] = useSessionStorage("titles", 1)
  const [fullChecked, setFullchecked] = useState(false);
  const [items, setItems] = useState([
    {
      keys: "1기",
      name: "김무일",
      area: "소프트웨어개발과",
      id: "sw2_01",
      date: "2022-04-25",
      checked: false,
      authority: '학생',
      teacher: '정영훈',
    },
    {
      keys: "1기",
      name: "박대형",
      area: "소프트웨어개발과",
      id: "sw2_02",
      date: "2022-04-25",
      checked: false,
      authority: '학생',
      teacher: '정영훈',
    },
    {
      keys: "1기",
      name: "김윤현",
      area: "소프트웨어개발과",
      id: "sw2_03",
      date: "2022-04-25",
      checked: false,
      authority: '학생',
      teacher: '정영훈',
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
              <FaPlus style={{ position: "relative", top: "3px" }} size={22} />{" "}
            </div>
            학생 등록하기
          </a>
          <a href="" style={mode === 'light' ? {color: '#ACB2CB'} : {color: '#6F738E'}}>
            <div>
              <FaTrashAlt style={ { position: "relative", top: "3px" }} size={22} />{" "}
            </div>
            학생 삭제하기
          </a>
        </div>
      </div>
      <div style={
          mode === "light"
            ? { background: "#FFFFFF" }
            : { background: "#2F3146" }
          }
          className={styles.Box}>
        <div className={styles.listBoxHeader}>
          <div
            style={
              mode === "light" ? { color: "#191919" } : { color: "#fff" }
            }>
            계정관리
          </div>
          <div className={styles.div}>
            <button onClick={() => onChangePage(8)}>
              <HiPlus
                style={{ position: "relative", top: "2px" }}
                size={18}
              />{" "}
              추가하기
            </button>
            <a href="">
              <HiTrash
                style={{ position: "relative", top: "2px" }}
                size={18}
              />{" "}
              삭제하기
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
              <td className={styles.keys}>
                기수
              </td>
              <td className={styles.name}>이름</td>
              <td className={styles.area}>학과</td>
              <td className={styles.id}>아이디</td>
            </tr>
            <tr>
              <td className={styles.authority}>권한</td>
              <td className={styles.teacher}>담당자</td>
              <td className={styles.date}>신청일</td>
            </tr>
          </thead>
          {items.map((item, index) => {
            return (
              <tbody key={index} style={ mode === "light" ? { color: "#ACB2CB" } : { color: "#6F738E" }}>
                <tr>
                  <td className={styles.checkBox}>
                    <div>
                      <input type="checkbox" onChange={onCheck(index)} checked={item.checked} id={index}/>
                      <label htmlFor={index} className={ mode === "light" ? styles.light_ck : styles.dark_ck }>
                        <HiCheck size={18} />
                      </label>
                    </div>
                  </td>{" "}
                  <td className={styles.keys} style={ mode === "light" ? { color: "#8993A7" } : { color: "#8C8EA0" }}>
                    <span>{item.keys}</span>
                  </td>
                  <td className={styles.name}>{item.name}</td>
                  <td className={styles.area}>{item.area}</td>
                  <td className={styles.id}>
                    {item.id}
                  </td>
                </tr>
                <tr>
                  <td className={styles.authority}>
                    <span>
                      {item.authority}
                    </span>
                  </td>
                  <td className={styles.teacher}>
                    <span>
                      {item.teacher}
                    </span>
                  </td>
                  <td className={styles.date}>
                    <span>
                      {item.date}
                    </span>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default ScoringArea;