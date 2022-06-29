import React, {useState, useEffect} from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import { Link } from "react-router-dom";
import moment from 'moment'
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
import styles from "../../css/StudentMain.module.scss";

const StudentSubmitPage = ({mode}) => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState(null);
  const [filterStr, setFilterStr] = useState("all");
  const filterOptions = [
    { value: "all", label: "전체보기" },
    { value: "open", label: "열림" },
    { value: "closed", label: "닫침" },
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
      str = "?closed=false";
    }
    if (filterStr === "closed") {
      str = "?closed=true";
    }

    setLoading(true)
    const res = await fetch("/api/board/v1/posts/@me" + str).then((res) =>
      res.json()
    );
    setLoading(false)

    if (!res) alert("제출 목록을 가져오는데 예상치 못한 오류가 발생했습니다.");
    setItems(
      await Promise.all(res.data.posts.map(async (post) => {
        setLoading(true)
        const depart = await fetch(`/api/score/v1/score/@me?category=${post.subCategory.parentId}`)
          .then((res) => res.json())
        // const score = await fetch(`/api/auth/v1/departs?depid=${post.}`)
          // .then((res) => res.json())
        setLoading(false)

        return {
          number: post.postId,
          name: post.user.name,
          department: "소프트웨어개발과",
          classification1: post.subCategory.parent.label,
          classification2: post.subCategory.label,
          achievement_rate: score.data.score / post.subCategory.parent.maxScore * 100,
          file: post.files.length,
          date: moment(post.createdAt).format('YYYY-MM-DD'),
        }
      }))
    );
  }
  return (
    <>
    <div
            className={styles.navbar}
            style={
              mode === "light"
                ? { background: "#F3F5F7" }
                : { background: "#2B2E44" }
            }
          >
            <div>
              <Link
                to="/submi"
                style={
                  mode === "light" ? { color: "#ACB2CB" } : { color: "#6F738E" }
                }
              >
                <div>
                  <FaPlus size={24} />{" "}
                </div>
                추가신청
              </Link>
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
                <Link to="/submit">
                  <HiPlus size={18} /> 신청하기
                </Link>
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
                    }),
                    singleValue: (provided) => ({
                      ...provided,
                      ...(mode == "light"
                        ? { color: "#ACB2CB" }
                        : { color: "#6F738E" }),
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
                    }),
                    option: (provided, state) => ({
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
                  <td className={styles.number}>번호</td>
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
                  <td className={styles.day}>신청일</td>
                </tr>
              </thead>
              {items === null && (
                <tbody
                  className={styles.error}
                  style={
                    mode === "light"
                      ? { color: "#8993A7" }
                      : { color: "#8C8EA0" }
                  }
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <HiRefresh />
                    <p>신청 내역을 불러오는 중입니다.</p>
                  </div>
                </tbody>
              )}
              {items !== null && items?.length < 1 && (
                <tbody
                  className={styles.error}
                  style={
                    mode === "light"
                      ? { color: "#8993A7" }
                      : { color: "#8C8EA0" }
                  }
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
                        <td className={styles.number} style={{ color: "#0684c4" }}>{item.number}</td>
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
                            {item.achievement_rate !== null ? (
                              <>
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
                                  }/>
                              </>
                            ) : (
                              <>
                                계산중...
                                <ProgressBar
                                  completed={0}
                                  height={"13px"}
                                  width={"200px"}
                                  labelSize={"0px"}
                                  bgColor={"rgba(6, 132, 196, 0.77)"}
                                  borderRadius={"3px"}
                                  baseBgColor={
                                    mode === "light" ? "#f1f1f1" : "#383850"
                                  }/>
                              </>
                            )}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div
                            className={
                              item.file > 0
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
    </>
  )
}

export default StudentSubmitPage