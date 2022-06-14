import React from "react";
import { AiOutlineFile } from 'react-icons/ai'
import { BsChevronLeft, BsChevronRight, BsChevronDown } from 'react-icons/bs'
import styles from '../css/Main.module.scss'

const Main = ({ mode }) => {

  const items = {
    header: ['번호', '신청인', '학과', '영역', '분류', '달성률', '파일'],
    data: [
      {
        number: '0001',
        name: '2204김무일', 
        department: '소프트웨어개발과', 
        area: '실무역량', 
        classification1: '자격증', 
        classification2: '정보처리기능사', 
        achievement_rate: '25%', 
        file: <AiOutlineFile />, 
        date: '2022-04-25' 
      },
      {
        number: '0001',
        name: '2204김무일', 
        department: '소프트웨어개발과', 
        area: '실무역량', 
        classification1: '자격증', 
        classification2: '정보처리기능사', 
        achievement_rate: '25%', 
        file: <AiOutlineFile />, 
        date: '2022-04-25' 
      },
      {
        number: '0001',
        name: '2204김무일', 
        department: '소프트웨어개발과', 
        area: '실무역량', 
        classification1: '자격증', 
        classification2: '정보처리기능사', 
        achievement_rate: '25%', 
        file: <AiOutlineFile />, 
        date: '2022-04-25' 
      },
      
    ]
  }


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
                    {items.header.map((item, index) => {
                      return <td key={index}>{item}</td>  
                    })}
                    <td>신청일<BsChevronDown /></td>
                  </tr>
                </thead>
                {items.data.map((item, index) => {
                  return (
                    <tbody key={index}>
                      <tr>
                        <td>{item.number}</td>
                        <td>{item.name}</td>
                        <td>{item.department}</td>
                        <td>{item.area}</td>
                        <td>{item.classification1} <br /> {item.classification2}</td>
                        <td>{item.achievement_rate}</td>
                        <td>{item.file}</td>
                        <td>{item.date}</td>
                      </tr>
                    </tbody>
                  )
                })}
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
                    {items.header.map((item, index) => {
                      return <td key={index}>{item}</td>  
                    })}
                    <td>신청일<BsChevronDown /></td>
                  </tr>
                </thead>
                {items.data.map((item, index) => {
                  return (
                    <tbody key={index}>
                      <tr>
                        <td>{item.number}</td>
                        <td>{item.name}</td>
                        <td>{item.department}</td>
                        <td>{item.area}</td>
                        <td>{item.classification1} <br /> {item.classification2}</td>
                        <td>{item.achievement_rate}</td>
                        <td>{item.file}</td>
                        <td>{item.date}</td>
                      </tr>
                    </tbody>
                  )
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main