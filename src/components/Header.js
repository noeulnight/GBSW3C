import React from "react";
import { AiOutlineSearch } from 'react-icons/ai'
import styles from '../css/Header.module.scss'

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
        <div className={mode === 'light' ? styles.light_header : styles.dark_header} >
          <div className={styles.modeBtn}>
            <input type="checkbox" id="mode" name="mode" onChange={CheckChange} />
          </div>
          <div className={styles.logo}>Gbsw Logo</div>
            <div className={styles.topbar}>
              <div className={styles.toggle}>
                  
              </div>
              <div className={mode === 'light' ? styles.light_search : styles.dark_search}>
              <label>
                <input type="text" placeholder="Search here" className={mode === 'light' ? styles.light_input : styles.dark_input} />
                <AiOutlineSearch className={styles.AiOutlineSearch}/>
              </label>
            </div>
            <label htmlFor="mode">
              <div className={mode === 'light' ? styles.light_mode : styles.dark_mode}>

              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header