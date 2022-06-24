import React, { useState } from "react";
import { HiMenu, HiSearch } from 'react-icons/hi'
import styles from '../css/Header.module.scss'

const Header = ({ mode, setMode, isOpen, setMenu }) => {
  const toggleMenu = () => {
    setMenu(isOpen => !isOpen);
  }

  const CheckChange = () => {
    if(mode == 'light') {
      setMode('dark');
    } else if(mode == 'dark') {
      setMode('light')
    }
  }

  return (
    <div>
      <div className={isOpen === true ? styles.show_contain : styles.hide_contain}>
        <div className={styles.header} style={mode === 'light' ? {background: '#fff'} : {background: '#2F3146'}} >
          <div className={styles.modeBtn}>
            <input type="checkbox" id="mode" name="mode" onChange={CheckChange} />
          </div>
          <div className={styles.topbar}>
            <div className={styles.toggle}>
                <HiMenu size={36} style={mode === 'light' ? {color: '#ACB2CB'} : {color: '#6F738E'}} onClick={() => toggleMenu()}/>
              </div>
            <div className={styles.search} style={mode === 'light' ? {color: '#ACB2CB'} : {color: '#8C8EA0'}}>
              <label>
                <input type="text" placeholder="검색어를 입력하세요." className={mode === 'light' ? styles.light_input : styles.dark_input} />
                <div className={styles.icons}>
                  <HiSearch className={styles.HiSearch}/>
                </div>
              </label>
            </div>
            <label className={styles.mode} htmlFor="mode">
              <div className={mode === 'light' ? styles.light_mode : styles.dark_mode}></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header