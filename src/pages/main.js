import React from "react";
import { BsChevronLeft, BsChevronRight, BsChevronDown, BsPlus } from 'react-icons/bs'
import styles from '../css/Main.module.scss'

const main = () => {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.title}>
          <div>
            학생 페이지/<span>신청 리스트</span>
          </div>
          <div>
            <div className={styles.page}>
              <span>페이지</span>
              <input type="text" />
            </div>
            <div className={styles.btn}>
              <label className={styles.left} for=""><BsChevronLeft /></label>
              <label className={styles.right} for=""><BsChevronRight /></label>
            </div>
          </div>
        </div>
        <div className={styles.listBox}>
          <div className={styles.Box}>
            <div className={styles.listHeader}>
              <div>신청 리스트</div>
              <div>
                  <span><BsPlus />추가신청</span>
                  <span className={styles.btn}>전체보기<BsChevronDown /></span>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <td>번호</td>
                  <td>신청인</td>
                  <td>과명</td>
                  <td>영역</td>
                  <td>분류</td>
                  <td>달성률</td>
                  <td>파일</td>
                  <td>신청일<BsChevronDown /></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0001</td>
                  <td>2204김무일</td>
                  <td>소프트웨어개발과</td>
                  <td>실무역량</td>
                  <td>
                      <p>자격증</p>정보처리기능사
                  </td>
                  <td>25%</td>
                  <td></td>
                  <td>2022-04-25</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>0002</td>
                  <td>2204김무일</td>
                  <td>소프트웨어개발과</td>
                  <td>실무역량</td>
                  <td>
                      <p>자격증</p>리눅스마스터
                  </td>
                  <td>25%</td>
                  <td></td>
                  <td>2022-04-25</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>0003</td>
                  <td>2204김무일</td>
                  <td>소프트웨어개발과</td>
                  <td>실무역량</td>
                  <td>
                    <p>프로젝트 산출물</p>자율형 프로젝트
                  </td>
                  <td>40%</td>
                  <td>
                    <div className={styles.file}>
                        
                    </div>
                  </td>
                  <td>2022-04-25</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default main