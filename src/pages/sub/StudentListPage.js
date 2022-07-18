import React, { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import {
  HiChevronLeft,
  HiChevronRight,
  HiChevronDown,
  HiPlus,
  HiX,
  HiCheck,
  HiTrash,
  HiPencil
} from "react-icons/hi";
import { FaCheck, FaPlus, FaTrashAlt } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import styles from "../../css/StudentList.module.scss";

const StudentListPage = ({ mode, onChangePage, page, setPage }) => {
const [fullChecked, setFullchecked] = useState(false);
  const [items, setItems] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await fetch('/api/auth/v1/users?onlyStudent=true&page=' + (page + 1))
        .then((res) => res.json())
      
      if (res.data.length < 1 && page > 0) {
        setPage(page - 1)
        setItems([])
        return
      }

      setItems(res.data.map((v) => ({
        name: v.name,
        id: v.userid,
        keys: `${v.cardinal}기`,
        department: "소프트웨어개발과",
        phone: v.phone
      })))
    })()
  }, [])

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
            <button onClick={() => onChangePage(9)} style={mode === 'light' ? {color: '#ACB2CB'} : {color: '#6F738E'}}>
              <div>
                <HiPencil style={ { position: "relative", top: "3px" }} size={22} />{" "}
              </div>
              학생 점수부여
            </button>
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
              점수 부여
            </div>
            <div className={styles.div}>
            <button onClick={() => onChangePage(9)}>
                <HiPencil
                  style={{ position: "relative", top: "2px" }}
                  size={18}
                />{" "}
                점수 부여하기
              </button>
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
                  <span>이름</span>
                  <div>유저아이디</div>
                </td>
                <td className={styles.keys}>기수</td>
                <td className={styles.class}>학과</td>
                <td className={styles.phoneNumber}>전화번호</td>
              </tr>
              <tr>
                <td className={styles.rate}>삭제하기</td>
              </tr>
            </thead>
            {items === null && (
              <tbody>
                <tr>
                  <td colspan={4}>
                    로딩중...
                  </td>
                </tr>
              </tbody>
            )}
            {items !== null && items.length < 1 && (
              <tbody>
                <tr>
                  <td colspan={4}>
                    학생 리스트가 비어있습니다
                  </td>
                </tr>
              </tbody>
            )}
            {items !== null && items.map((item, index) => {
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
                    <td className={styles.user} style={ mode === "light" ? { color: "#8993A7" } : { color: "#8C8EA0" }}>
                      <span>{item.name}</span>
                      <div>{item.id}</div>
                    </td>
                    <td className={styles.keys}>{item.keys}</td>
                    <td className={styles.class}>{item.department}</td>
                    <td className={styles.phoneNumber}>{item.phone}</td>
                  </tr>
                  <tr>
                    <td className={styles.rate}>
                      <button style={mode === 'light' ? {color: '#ACB2CB'} : {color: '#6F738E'}}><AiFillDelete size={24}/></button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      </div>
    </>
  )
}

export default StudentListPage;
