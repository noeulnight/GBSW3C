import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import {
  HiChevronLeft,
  HiChevronRight,
  HiChevronDown,
  HiPlus,
  HiX,
  HiCheck,
  HiTrash
} from "react-icons/hi";
import { FaCheck, FaPlus, FaTrashAlt } from "react-icons/fa";
import styles from "../../css/StudentList.module.scss";

const StudentListPage = ({ mode }) => {
const [fullChecked, setFullchecked] = useState(false);
  const [items, setItems] = useState([
    {
      name: "김무일",
      id: "gbsw301",
      sid: "2209",
      department: "소프트웨어개발과 ",
      phone: "010-1234-1234",
      achievement_rate: 40,
      checked: false,
    },
    {
      name: "변예준",
      id: "gbsw301",
      sid: "2210",
      department: "소프트웨어개발과",
      phone: "010-1234-1234",
      achievement_rate: 25,
      checked: false,
    },
    {
      name: "김창환",
      id: "gbsw301",
      sid: "2211",
      department: "소프트웨어개발과",
      phone: "010-1234-1234",
      achievement_rate: 90,
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
              학생 리스트
            </div>
            <div className={styles.div}>
              <a href="">
                <HiPlus
                  style={{ position: "relative", top: "2px" }}
                  size={18}
                />{" "}
                학생 등록하기
              </a>
              <a href="">
                <HiTrash
                  style={{ position: "relative", top: "2px" }}
                  size={18}
                />{" "}
                학생 삭제하기
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
                  <span>이름</span>
                  <div>유저아이디</div>
                </td>
                <td className={styles.sid}>학번</td>
                <td className={styles.class}>학과</td>
                <td className={styles.phoneNumber}>전화번호</td>
              </tr>
              <tr>
                <td className={styles.rate}>달성률</td>
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
                    <td className={styles.user} style={ mode === "light" ? { color: "#8993A7" } : { color: "#8C8EA0" }}>
                      <span>{item.name}</span>
                      <div>{item.id}</div>
                    </td>
                    <td className={styles.sid}>{item.sid}</td>
                    <td className={styles.class}>{item.department}</td>
                    <td className={styles.phoneNumber}>{item.phone}</td>
                  </tr>
                  <tr>
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
                      </span>
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