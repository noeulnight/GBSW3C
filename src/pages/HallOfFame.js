import React, { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { FaPlus } from "react-icons/fa";

import styles from "../css/HallOfFame.module.scss";

const HallOfFame = ({ mode, isOpen }) => {
  const [items, setItems] = useState([
    {
      name: "김무일",
      ranking: 1,
      job: "웹 개발자",
      generation: 1,
      achievement_rate: 90
    }
  ]);

  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch("/api/board/v1/posts/@me").then((res) =>
  //       res.json()
  //     );

  //     if (!res)
  //       alert("제출 목록을 가져오는데 예상치 못한 오류가 발생했습니다.");

  //     setItems(
  //       res.data.posts.map((post) => ({
  //         number: "0003",
  //         name: "2204김무일",
  //         department: "소프트웨어개발과",
  //         area: "도전역량",
  //         classification1: "프로젝트 산출물",
  //         classification2: "자율형 프로젝트",
  //         achievement_rate: 40,
  //         file: 1,
  //         date: "2022-04-25",
  //       }))
  //     );
  //   })();
  // }, []);

  return (
    <div className={isOpen === true ? styles.open_main : styles.hide_main}>
      <div className={styles.listHeader} style={mode === "light" ? { color: "#191919" } : { color: "#fff" }}>
        <div className={styles.page}>
          <div className={mode === "light" ? styles.light_page : styles.dark_page }>
          </div>
        </div>
      </div>
      <div className={styles.listBox}>
        <div style={mode === "light"? { background: "#FFFFFF" } : { background: "#2F3146" }} className={styles.Box}>
          <div className={styles.listBoxHeader}>
            <div style={mode === "light" ? { color: "#191919" } : { color: "#fff" }}>
              랭킹
            </div>
          </div>
          <table>
            <thead style={mode === "light" ? { background: "#F3F5F7", color: "#ACB2CB" } : { background: "#2B2E44", color: "#6F738E" }}>
              <tr>
                <td>순위</td>
                <td>이름</td>
                <td>직업</td>
                <td>기수</td>
              </tr>
              <tr>
                <td>달성률</td>
              </tr>
            </thead>
            {items === null && (
              <tbody style={{display: "flex", justifyContent: "center", paddingTop: 10}}>
                <HiRefresh /> 랭킹을 불러오는 중입니다.
              </tbody>
            )}
            {items !== null && items?.length < 1 && (
              <tbody style={{display: "flex", justifyContent: "center", paddingTop: 10}}>
                랭킹이 등록되지 않았습니다.
              </tbody>
            )}
            {items !== null &&
              items?.length > 0 &&
              items.map((item, index) => {
                return (
                  <tbody key={index} style={mode === "light" ? { color: "#ACB2CB" } : { color: "#6F738E" }}>
                    <tr>
                      <td>{item.ranking}위</td>
                      <td style={mode === "light"? { color: "#8993A7" }: { color: "#8C8EA0" }}> {item.name} </td>
                      <td>{item.job}</td>
                      <td>{item.generation}기</td>
                      </tr>
                      <tr>
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
                            }/>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default HallOfFame;