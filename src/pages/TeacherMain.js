import React from "react";
import { AiOutlineFile, AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'
import { BsChevronLeft, BsChevronRight, BsChevronDown } from 'react-icons/bs'
import styles from '../css/TeacherMain.module.scss'

const TeacherMain = ({ mode }) => {
  const items = {
    header: [<input type='checkbox' style={{marginTop: '5px', width: "22px", height: '22px'}} />, '신청인', '학과', '영역', '분류', '달성률', '파일'],
    data: [
      {
        id: "2204",
        name: '2204김무일', 
        department: '소프트웨어개발과', 
        area: '실무역량', 
        classification1: '자격증', 
        classification2: '정보처리기능사', 
        achievement_rate: '25%', 
        file: <AiOutlineFile size={24} />, 
        date: '2022-04-25' 
      },
      {
        name: '2204김무일', 
        department: '소프트웨어개발과', 
        area: '실무역량', 
        classification1: '자격증', 
        classification2: '정보처리기능사', 
        achievement_rate: '25%', 
        file: <AiOutlineFile size={24} />, 
        date: '2022-04-25' 
      },
      {
        name: '2204김무일', 
        department: '소프트웨어개발과', 
        area: '실무역량', 
        classification1: '자격증', 
        classification2: '정보처리기능사', 
        achievement_rate: '25%', 
        file: <AiOutlineFile size={24} />, 
        date: '2022-04-25' 
      },
      
    ]
  }

  return (
    <div>
      <div className={styles.main}>
        <div className={mode === 'light' ? styles.light_title : styles.dark_title}>
          <div>
            교사 페이지/<span style={{color : '#0684c4'}}>신청 리스트</span>
          </div>
          <div>
            <div className={mode === 'light' ? styles.light_page : styles.dark_page}>
              <span>페이지</span>
              <input type="text" defaultValue="1" /> / 1
            </div>
            <div className={styles.btn}>
              <label className={mode === 'light' ? styles.light_left : styles.dark_left}><BsChevronLeft /></label>
              <label className={mode === 'light' ? styles.light_right : styles.dark_right}><BsChevronRight /></label>
            </div>
          </div>
        </div>
        <div className={mode === 'light' ? styles.light_listBox : styles.dark_listBox}>
          <div className={styles.Box}>
            <div className={styles.listHeader}>
              <div>신청 리스트</div>
              <div>
                  <a href=""><AiOutlineCheck style={{position: 'relative', top: '3px'}} size={18}/> 수락하기</a>
                  <a href=""><AiOutlineClose style={{position: 'relative', top: '3px'}} size={18}/> 거절하기</a>
                  <span className={styles.btn}>전체보기<BsChevronDown  style={{position: 'relative', left: '3px', top: '2px'}}/></span>
              </div>
            </div>
            <table>
              <thead className={mode === 'light' ? styles.light_thead : styles.dark_thead}>
                <tr>
                  {items.header.map((item, index) => {
                    return <td key={index}>{item}</td>  
                  })}
                  <td>신청일<BsChevronDown style={{position: 'relative', left: '3px', top: '2px'}}/></td>
                </tr>
              </thead>
              {items.data.map((item, index) => {
                return (
                  <tbody key={index}>
                    <tr>
                      <td> 
                        <input type='checkbox' style={{marginTop: '5px', width: "22px", height: '22px'}} value={item.number} onChange={() => onChange(id)} />
                      </td>
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

export default TeacherMain