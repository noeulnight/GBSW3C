import React from "react";
import { AiOutlineSearch } from 'react-icons/ai'
import styles from '../css/Header.module.scss'
import { FaHornbill } from "react-icons/fa";

const Header = ({ mode, setMode }) => {

  const CheckChange = () => {
    if(mode == 'light') {
      setMode('dark');
    } else if(mode == 'dark') {
      setMode('light')
    }
  }
  
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
        <input type="checkbox" id="mode" name="mode" onChange={CheckChange} />
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
            <label htmlFor="mode">
              <div className="mode">
                <FaHornbill />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header