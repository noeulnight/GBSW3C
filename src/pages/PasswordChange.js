import React, { useState } from 'react'
import styles from '../css/PasswordChange.module.scss'

const PasswordChange = ({isOpen, mode}) => {
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('');

  return (
      <div className={styles.form} style={mode === 'light' ? {background: '#FFFFFF'} : {background: '#2F3146'}}>
        <div className={styles.title} style={mode === 'light' ? {color: "#191919"} : {color: "#fff"}}>
          비밀번호 재설정
        </div>
        <div className={styles.inputForm}>
          <input type='password' placeholder='현재 비밀번호 입력' onChange={(e) => setPassword(e.target.value)} style={mode === 'light' ? {borderColor: '#ACB2CB', color: '#191919', background: '#F3F5F7'} : {borderColor: '#6F738E', color: '#fff', background: '#2B2E44'}}/>
          <input type='password' placeholder='새로운 비밀번호 입력' onChange={(e) => setNewPassword(e.target.value)} style={mode === 'light' ? {borderColor: '#ACB2CB', color: '#191919', background: '#F3F5F7'} : {borderColor: '#6F738E', color: '#fff', background: '#2B2E44'}}/>
          <input type='password' placeholder='새로운 비밀번호(확인) 입력' onChange={(e) => setCheckPassword(e.target.value)} style={mode === 'light' ? {borderColor: '#ACB2CB', color: '#191919', background: '#F3F5F7'} : {borderColor: '#6F738E', color: '#fff', background: '#2B2E44'}}/>
        </div>
        <div className={styles.btn}>
          <input type='submit' value="변경" />
        </div>
      </div>
  )
}

export default PasswordChange