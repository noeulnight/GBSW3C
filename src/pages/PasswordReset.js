import React, { useState } from 'react'
import styles from '../css/PasswordReset.module.scss'

const PasswordReset = ({isOpen, mode}) => {
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('');

  return (
    <div className={isOpen === true ? styles.open_menu : styles.hide_menu}>
      <div className={styles.form}>
        <div className={styles.title}>
          비밀번호 변경
        </div>
        <div className={styles.inputForm}>
          <div className={styles.input}>
            <input type='password' placeholder='현재 비밀번호' onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className={styles.input}>
            <input type='password' placeholder='새 비밀번호' onChange={(e) => setNewPassword(e.target.value)}/>
          </div>
          <div className={styles.input}>
            <input type='password' placeholder='새 비밀번호 확인' onChange={(e) => setCheckPassword(e.target.value)}/>
          </div>
        </div>
        <div className={styles.btn}>
          <button></button>
        </div>
      </div>
    </div>
  )
}

export default PasswordReset