import React from "react";
import { AiOutlineFile } from 'react-icons/ai'
import { BsChevronLeft, BsChevronRight, BsChevronDown } from 'react-icons/bs'
import styles from '../css/Main.module.scss'

const main = ({ mode }) => {
  if(mode == 'light') {
    return (
      <div>
        <div className={styles.light_main}>
          <div className={styles.light_title}>
            <div>
              학생 페이지/<span style={{color : '#0684c4'}}>신청 리스트</span>
            </div>
            <div>
              <div className={styles.light_page}>
                <span>페이지</span>
                <input type="text" defaultValue="1" /> / 1
              </div>
              <div className={styles.light_btn}>
                <label className={styles.light_left}><BsChevronLeft /></label>
                <label className={styles.light_right}><BsChevronRight /></label>
              </div>
            </div>
          </div>
          <div className={styles.light_listBox}>
            <div className={styles.light_Box}>
              <div className={styles.light_listHeader}>
                <div>신청 리스트</div>
                <div>
                    <span>+ 추가신청</span>
                    <span className={styles.light_btn}>전체보기<BsChevronDown /></span>
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
                      <AiOutlineFile className={styles.light_file} />
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
  } else if (mode == 'dark') {
    return (
      <div>
        <div className={styles.dark_main}>
          <div className={styles.dark_title}>
            <div>
              학생 페이지/<span style={{color : '#0684c4'}}>신청 리스트</span>
            </div>
            <div>
              <div className={styles.dark_page}>
                <span>페이지</span>
                <input type="text" defaultValue="1" /> / 1
              </div>
              <div className={styles.dark_btn}>
                <label className={styles.dark_left}><BsChevronLeft /></label>
                <label className={styles.dark_right}><BsChevronRight /></label>
              </div>
            </div>
          </div>
          <div className={styles.dark_listBox}>
            <div className={styles.dark_Box}>
              <div className={styles.dark_listHeader}>
                <div>신청 리스트</div>
                <div>
                    <span>+ 추가신청</span>
                    <span className={styles.dark_btn}>전체보기<BsChevronDown /></span>
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
                      <AiOutlineFile className={styles.dark_file} />
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
}

export default main