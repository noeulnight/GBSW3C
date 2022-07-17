import React, { useState, useSessionStorag, useEffect } from "react";
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
import styles from "../css/AdminMain.module.scss";
import SubmitPage from "./sub/SubmitPage";
import StudentListPage from "./sub/StudentListPage";
import HallOfFame from './HallOfFame'
import Introduce from './3C_Introduce'
import Statistics from './Statistics'
import ScoringArea from './ScoringArea'
import AccountList from './AccountList'
import PasswordChange from './PasswordChange'
import useSessionStorage from "../components/UseSessionStorage";

const TeacherMain = ({ mode, isOpen, selectPage }) => {
  const [active, setActive] = useSessionStorage("active")
  const [page, setPage] = useState(0)

  useEffect(() => {
    console.log('active page', selectPage);
    setActive(selectPage)
  }, [selectPage])
  return (
    <div>
      <div className={isOpen === true ? styles.open_main : styles.hide_main}>
        <div
          className={styles.listHeader}
          style={mode === "light" ? { color: "#191919" } : { color: "#fff" }}
        >
          <div className={styles.title}>
            교사 페이지/
            <span style={{ color: "#0684c4" }}>
              {selectPage === 1 && "신청 리스트"}
              {selectPage === 2 && "학생 점수부여"}
              {selectPage === 3 && "명예의 전당"}
              {selectPage === 4 && "3C 인증제"}
              {/* {selectPage === 5 && "통계분석"} */}
              {selectPage === 5 && "계정관리"}
              {selectPage === 6 && "점수 영역관리"}
              {selectPage === 7 && "비밀번호 재설정"}
            </span>
          </div>
          {selectPage === 1 && <div className={styles.page}>
            <div
              className={
                mode === "light" ? styles.light_page : styles.dark_page
              }
            >
              <span>페이지</span>
              {page + 1}
            </div>
            <div className={styles.btn}>
              <label
                style={
                  page < 1
                    ? mode === "light"
                      ? { backgroundColor: "#FFFFFF", color: "#ACB2CB" }
                      : { backgroundColor: "#2F3146", color: "#6F738E" }
                    : mode === "light"
                      ? { backgroundColor: "#0684c4", color: "#F3F5F7" }
                      : { backgroundColor: "#0684c4", color: "#2B2E44" }
                }
                className={styles.left}
                onClick={() => page < 1 ? undefined : setPageFn(page - 1)}
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
                onClick={() => setPageFn(page + 1)}
              >
                <HiChevronRight size={24} />
              </label>
            </div>
          </div>}
        </div>
        <div className={styles.listBox}>
          { selectPage === 1 && <SubmitPage mode={mode} key={page} page={page} setPage={setPage}/> }
          { selectPage === 2 && <StudentListPage mode={mode}/> }
          { selectPage === 3 && <HallOfFame mode={mode}/> }
          { selectPage === 4 && <Introduce mode={mode}/> }
          {/* { selectPage === 5 && <Statistics mode={mode}/> } */}
          { selectPage === 5 && <AccountList page={selectPage} mode={mode} isOpen={isOpen} /> }
          { selectPage === 6 && <ScoringArea page={selectPage} mode={mode} isOpen={isOpen} /> }
          { selectPage === 7 && <PasswordChange mode={mode}/> }
        </div>
      </div>
    </div>
  );
};
export default TeacherMain;
