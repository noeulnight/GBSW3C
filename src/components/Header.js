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
  if(mode == 'light') {
    return (
      <div>
        <div className={styles.light_container}>
          <div className={styles.light_header}>
            <div className={styles.modeBtn}>
              <input type="checkbox" id="mode" name="mode" onChange={CheckChange} />
            </div>
            <div className={styles.light_logo}>Gbsw Logo</div>
              <div className={styles.light_topbar}>
                <div className={styles.light_toggle}>
                    
                </div>
                <div className={styles.light_search}>
                <label>
                  <input type="text" placeholder="Search here" className={styles.light_input} />
                  <AiOutlineSearch className={styles.light_AiOutlineSearch}/>
                </label>
              </div>
              <label htmlFor="mode">
                <div className={styles.light_mode}>

                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    )
  } else if(mode == 'dark') {
    return(
      <div>
        <div className={styles.dark_container}>
            <div className={styles.dark_header}>
            <input type="checkbox" id="mode" name="mode" onChange={CheckChange} />
              <div className={styles.dark_logo}>Gbsw Logo</div>
                <div className={styles.dark_topbar}>
                  <div className={styles.dark_toggle}>
                      
                  </div>
                  <div className={styles.dark_search}>
                  <label>
                    <input type="text" placeholder="Search here" className={styles.dark_input}/>
                    <AiOutlineSearch className={styles.dark_AiOutlineSearch}/>
                  </label>
                </div>
                <label htmlFor="mode">
                  <div className={styles.dark_mode}>
                    
                  </div>
                </label>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Header