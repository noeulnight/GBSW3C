import React, { useState, useEffect } from "react";
import Select from "react-select";
import ProgressBar from "@ramonak/react-progress-bar";
import { Link, useNavigate } from "react-router-dom";
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
import moment from "moment";

const SubmitPage = ({ mode, page, depart, setPage }) => {
  const navigate = useNavigate();
  const [items, setItems] = useState(null)
  const [fullChecked, setFullchecked] = useState(false);
  const [filterStr, setFilterStr] = useState("all");
  const filterOptions = [
    { value: "all", label: "전체보기" },
    { value: "open", label: "열림" },
    { value: "closed", label: "닫힘" },
  ];

  useEffect(() => {
    fetchData(filterStr);
  }, []);

  function onFilterChange(e) {
    setFilterStr(e.value);
    fetchData(e.value);
  }

  async function fetchData(filterStr) {
    setItems(null)

    let str = "";
    if (filterStr === "open") {
      str = "&closed=false";
    }
    if (filterStr === "closed") {
      str = "&closed=true";
    }

    const res = await fetch("/api/board/v1/posts?page=" + page + str).then((res) =>
      res.status === 403 ? (sessionStorage.clear() || window.location.reload()) : res.json()    );

    if (!res) alert("제출 목록을 가져오는데 예상치 못한 오류가 발생했습니다.");

    if (res.data.posts.length < 1 && page > 0) {
      setPage(page - 1)
      setItems([])
      return
    }

    setItems(res.data.posts.map((post) => ({
      number: post.postId,
      name: post.user.name,
      classification1: post.subCategory?.parent?.label || '삭제된 영역입니다.',
      classification2: post.subCategory?.label || '삭제된 영역입니다.',
      files: post.files, 
      closed: post.closed,
      date: moment(post.createdAt).format('YYYY-MM-DD'),
    })));
  } 

  const onCheck = (index) => () => {
    items[index].checked = !items[index].checked;
    setItems([...items]);
    setFullchecked(false);
  };

  const onFullCheck = () => {
    setItems([...items.map((v) => ({ ...v, checked: v.closed ? false : !fullChecked }))]);
    setFullchecked(!fullChecked);
  };

  const onAction = (action) => {
    setItems([...items.map((v) => ({ ...v, checked: false }))]);
    setFullchecked(false);
    for (const item of items.filter((v) => v.checked)) {
      fetch('/api/board/v1/posts/' + item.number + '/@action', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          action
        })
      }).then(fetchData)
    }
  }

    return (
        <>
        <div className={styles.navbar} style={mode === 'light' ? {background: '#F3F5F7'} : {background: '#2B2E44'}}>
            <div>
              <button href="" style={mode === 'light' ? {color: '#ACB2CB'} : {color: '#6F738E'}} onClick={() => onAction('RESOLVE')}>
                <div>
                <FaCheck
                  style={{ position: "relative", top: "3px" }}
                  size={22}
                />{" "}
                </div>
                수락하기
              </button>
            </div>
            <div>
              <button href="" style={mode === 'light' ? {color: '#ACB2CB'} : {color: '#6F738E'}}  onClick={() => onAction('REJECT')}>
                <div>
                <FaPlus
                  style={{ position: "relative", top: "3px", transform: 'rotate(-45deg)' }}
                  size={24}
                />{" "}
                </div>
                거절하기
              </button>
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
                <button onClick={() => onAction('RESOLVE')}>
                  <HiCheck
                    style={{ position: "relative", top: "3px" }}
                    size={18}
                  />{" "}
                  수락하기
                </button>
                <button onClick={() => onAction('REJECT')}>
                  <HiX
                    style={{ position: "relative", top: "3px"}}
                    size={16}
                  />{" "}
                  거절하기
                </button> 
                <Select
                  isSearchable={false}
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      ...(mode == "light"
                        ? {
                            border: "1px solid #ACB2CB",
                            backgroundColor: "transparent",
                          }
                        : {
                            border: "1px solid #6F738E",
                            backgroundColor: "transparent",
                          }),
                      cursor: 'pointer'
                    }),
                    singleValue: (provided) => ({
                      ...provided,
                      ...(mode == "light"
                        ? { color: "#ACB2CB" }
                        : { color: "#6F738E" }),
                      cursor: 'pointer'
                    }),
                    menu: (provided) => ({
                      maxWidth: 500,
                      ...provided,
                      ...(mode == "light"
                        ? {
                          color: "black",
                          backgroundColor: "#F3F5F7",
                        }
                        : {
                          color: "white",
                          backgroundColor: "#383850",
                        }),
                      cursor: 'pointer'
                    }),
                    option: (provided, state) => ({
                      cursor: 'pointer',
                      ...provided,
                      ...(mode == "light"
                        ? {
                          color: state.isFocused ? 'white' : "black",
                          backgroundColor: state.isFocused ? 'rgb(6, 132, 196)' :  "#F3F5F7",
                        }
                        : {
                          color: state.isFocused ? 'white' : "white",
                          backgroundColor: state.isFocused ? 'rgb(6, 132, 196)' : "#383850",
                        }),
                    })
                  }}
                  value={filterOptions.filter(function (option) {
                    return option.value === filterStr;
                  })}
                  onChange={onFilterChange}
                  options={filterOptions}
                />
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
                  <td className={styles.fic}>분류</td>
                </tr>
                <tr>
                  <td className={styles.file}>파일</td>
                  <td className={styles.day}>
                    신청일
                  </td>
                </tr>
              </thead>
              {items === null && (
                <tbody
                  style={
                    mode === "light"
                      ? { color: "#ACB2CB" }
                      : { color: "#6F738E" }
                  }
                >
                  
                  <tr>
                    <td colSpan={100}>
                      로딩중...
                    </td>
                  </tr>
                </tbody>

              )}
              {items !== null && !items && (
                <tbody
                  style={
                    mode === "light"
                      ? { color: "#ACB2CB" }
                      : { color: "#6F738E" }
                  }
                >
                  
                  <tr>
                    <td colSpan={100}>
                      신청 리스트가 비어있습니다.
                    </td>
                  </tr>
                </tbody>
              )}
              {items && items.map((item, index) => {
                return (
                  <tbody
                    onClick={() => navigate('/posts/' + item.number)}
                    key={index}
                    style={
                      mode === "light"
                        ? { color: "#ACB2CB" }
                        : { color: "#6F738E" }
                    }
                  >
                    <tr style={item.closed ? { textdecoration: 'line-through', opacity: 0.6 } : {}}>
                      <td className={styles.checkBox}>
                        <div>
                          {item.closed ? (
                            <p>완료</p>
                          ):(
                            <>
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

                            </>
                          )}
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
