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
import styles from "../css/ScoringArea.module.scss";
import StudentSubmitPage from "./sub/StudentSubmitPage"

const ScoringArea = ({ mode, isOpen }) => {
  const [lists, setLists] = useSessionStorage("lists", 1)
  const [titles, setTitles] = useSessionStorage("titles", 1)
  const [fullChecked, setFullchecked] = useState(false);
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const res = await fetch('/api/board/v1/categories')
      .then((res) => res.json())
    
    setItems(res.data.categories.map((v) => v.children).flat().map((v) => ({
      classification: v.parent.description,
      categoryId: v.parent.categoryId,
      id: v.subcategoryId,
      type: v.parent.label,
      area: v.label,
      score: v.score,
      maxScore: v.parent.maxScore,
      date: `${v.parent.evalDateStart.substr(0, 2)}월 ${v.parent.evalDateStart.substr(2, 2)}일 ~ ${v.parent.evalDateStop.substr(0, 2)}월 ${v.parent.evalDateStop.substr(2, 2)}일` 
    })))
  }

  const onCheck = (index) => () => {
    items[index].checked = !items[index].checked;
    setItems([...items]);
    setFullchecked(false);
  };

  const onFullCheck = () => {
    setItems([...items.map((v) => ({ ...v, checked: !fullChecked }))]);
    setFullchecked(!fullChecked);
  };

  const onDelete = () => {
    const todo = items.filter(v => v.checked)

    if (!confirm('다음 영역을 삭제 할까요? (되돌릴 수 없습니다): \n' + todo.map(v => v.area).join(', '))) return
    for (const item of todo) {
      fetch('/api/board/v1/categories/' + item.categoryId + '/' + item.id, {
        method: 'DELETE'
      }).then(fetchData)
    }
  }

  return (
    <>
      <div className={styles.navbar} style={mode === 'light' ? {background: '#F3F5F7'} : {background: '#2B2E44'}}>
        <div>
          <Link to="/ScoringAreaAdd" style={mode === 'light' ? {color: '#ACB2CB'} : {color: '#6F738E'}}>
            <div>
              <FaPlus style={{ position: "relative", top: "3px" }} size={22} />{" "}
            </div>
            학생 등록하기
          </Link>
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
            점수 영역관리
          </div>
          <div className={styles.div}>
            <Link to="/ScoringAreaAdd">
              <HiPlus
                style={{ position: "relative", top: "2px" }}
                size={18}
              />{" "}
              추가하기
            </Link>
            <a href="">
              <HiPencil
                style={{ position: "relative", top: "2px" }}
                size={18}
              />{" "}
              수정하기
            </a>
            <button onClick={onDelete}>
              <HiTrash
                style={{ position: "relative", top: "2px" }}
                size={18}
              />{" "}
              삭제하기
            </button>
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
              <td className={styles.classification}>
                분류
              </td>
              <td className={styles.type}>종류</td>
              <td className={styles.area}>영역</td>
              <td className={styles.score}>점수</td>
            </tr>
            <tr>
              <td className={styles.date}>등록/수정일</td>
            </tr>
          </thead>
          {items === null && (
            <tbody style={ mode === "light" ? { color: "#ACB2CB" } : { color: "#6F738E" }}>
              <tr>
                <td colspan={6}>
                  로딩중...
                </td>
              </tr>
            </tbody>
          )}
          {items !== null && items.length < 1 && (
            <tbody style={ mode === "light" ? { color: "#ACB2CB" } : { color: "#6F738E" }}>
              <tr>
                <td colspan={6}>
                  영역 목록이 비어있습니다
                </td>
              </tr>
            </tbody>
          )}
          {items !== null && items?.map((item, index) => {
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
                  <td className={styles.classification} style={ mode === "light" ? { color: "#8993A7" } : { color: "#8C8EA0" }}>
                    <span>{item.classification}</span>
                  </td>
                  <td className={styles.type}>{item.type}</td>
                  <td className={styles.area}>{item.area}</td>
                  <td className={styles.score}>
                    {item.score}점 <br />
                    최대 {item.maxScore}점
                  </td>
                </tr>
                <tr>
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
