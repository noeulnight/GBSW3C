import React, { useState } from 'react'
import styles from '../css/PasswordChange.module.scss'

const PasswordChange = ({isOpen, mode}) => {
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('');

  return (
      <div className={styles.form}>
        <div className={styles.title}>
          비밀번호 재설정
        </div>
        <div className={styles.inputForm}>
          <input type='password' placeholder='현재 비밀번호를 입력하세요' onChange={(e) => setPassword(e.target.value)}/>
          <input type='password' placeholder='새로운 비밀번호를 입력하세요' onChange={(e) => setNewPassword(e.target.value)}/>
          <input type='password' placeholder='새로운 비밀번호를 다시 입력하세요' onChange={(e) => setCheckPassword(e.target.value)}/>
        </div>
        <div className={styles.btn}>
          <input type='submit' value="변경" />
        </div>
      </div>
  )
}

export default PasswordChange