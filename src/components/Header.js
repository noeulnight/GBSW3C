import React from "react";
import { AiOutlineSearch } from 'react-icons/ai'
import styles from '../css/Header.module.scss'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>Gbsw Logo</div>
          <div className={styles.topbar}>
            <div className={styles.toggle}>
                
            </div>
          <div className={styles.search}>
            <label>
              <input type="text" placeholder="Search here" />
              <AiOutlineSearch className={styles.AiOutlineSearch}/>
            </label>
          </div>
          <div className={styles.mode}>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header