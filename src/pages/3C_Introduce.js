import React from "react";
import img from "../img/3C.png"
import styles from '../css/3C_Intoduce.module.scss'

const Introduce = ({ isOpen }) => {
  return (
    <div>
      <div className={isOpen === true ? styles.open_menu : styles.hide_menu}>
        <div className={styles.title}>
          <h1>3C란 무엇인가?</h1>
        </div>
        <div className={styles.main}>
          <div className={styles.img}>
            <img src={img} />
          </div>
          <div className={styles.information}>
            <div className={styles.information1}>
              <p>
                6대 핵심 역량을 기준으로 <br />
                특정 목표를 달성하며 포인트를 얻어 특정 <br />
                레벨에 달성하면 여러가지 부상과 인재상을 <br />
                받을수 있는 제도이다.
              </p>
            </div>
            <div className={styles.information2}>
              <p>
                설명글을 작성해주세요<br />
                설명글을 작성해주세요<br />
                설명글을 작성해주세요<br />
                설명글을 작성해주세요<br />
                설명글을 작성해주세요
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduce