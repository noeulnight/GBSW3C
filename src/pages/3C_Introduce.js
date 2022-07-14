import React from "react";
import img from "../img/New3.png"
import styles from '../css/3C_Intoduce.module.scss'

const Introduce = ({ mode, isOpen }) => {
  console.log(mode);  
  
  return (
    <div className={isOpen === true ? styles.open_menu : styles.hide_menu} 
    style={
      mode === "light"
        ? { background: "#fff", color: "#ACB2CB" }
        : { background: "#2F3146", color: "#6F738E" }
    }>
      <div className={styles.main}>
        <div className={styles.img}>
          <img src={img} />
        </div>
        <div className={styles.information}>
          <h1>3C 인증제란?</h1>
          <p>
            3C란 Competence(전문성), Creativity(창의성), <br />
            Character qualities(인성)의 약자로 SW직업인에게 필요한 <br /> 
            6대 핵심 역량을 기준으로 롤 플레잉 게임과 비슷하게 특정 <br />
            목표를 달성하고 포인트를 얻어 특정 점수에 도착하면 <br />
            여러가지 보상과 인재상을 받을 수 있는 제도이다.
          </p>
          <p>
            포인트를 얻는 방법에는 자격증을 취득하거나 프로젝트를 통해 <br />
            얻을 수 있는 실무 영역 각종 대회 참가와 외부 교육 프로그램 <br /> 
            참가같은 도전역량 영화나 독서등 문화에 관한 문화 영역 같은 <br />
            다양한 방법이 있는데 그 중 조건을 만족한 것을 신청하면 <br />
            포인트를 얻을 수 있다.
          </p>
          <a href="http://viewer20.gyo6.net:8080/SynapDocViewServer/viewer/doc.html?key=ac720a6703974861af67e57b7e3a7dec&convType=img&convLocale=en_US&contextPath=/SynapDocViewServer" style={mode === 'light' ? {color: '#0320b1'} : {color: '#0684c4'}} >자세한 내용은 이곳을 눌러 확인하세요</a>
          {/* 대충 설치 위치 */}
        </div>
      </div>
    </div>
  )
}

export default Introduce