import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../css/PasswordChange.module.scss'

const PasswordChange = ({isOpen, mode, onChangePage}) => {
  const navigation = useNavigate()
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('');
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    if (loading) return
    if (newPassword.length < 6) {
      setMessage('비밀번호는 최소 6자리 이상이여야 합니다.')
      return
    }
    if (newPassword !== checkPassword) {
      setMessage('비밀번호 확인이 서로 일치하지 않습니다.')
      return
    }

    setLoading(true)

    const data = await fetch('/api/auth/v1/@me', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        old_password: password,
        new_password: newPassword
      })
    }).then((res) => res.status === 403 ? (sessionStorage.clear() || window.location.reload()) : res.json())

    if (data.success) {
      alert("비밀번호가 성공적으로 변경되었습니다. (보안을 위해 다시 로그인해 주십시오)")
      window.location.reload()
      return
    }

    setLoading(false)

    if (data.code === 'INCORRECT_PW') {
      setMessage('현재 비밀번호가 일치하지 않습니다.')
      return
    }
  }

  return (
    <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <form onSubmit={onSubmit} className={styles.form} style={mode === 'light' ? {background: '#FFFFFF'} : {background: '#2F3146'}}>
        {loading && (
          <div style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100vw', height: '100vh',
            zIndex: 999999999, backgroundColor: '#00000099', 
            display: 'flex', justifyContent: 'center', 
            alignItems: 'center', color: 'white' }}>
            처리중입니다...
          </div>
        )}
        <div className={styles.title} style={mode === 'light' ? {color: "#191919"} : {color: "#fff"}}>
          비밀번호 재설정
        </div>
        <div className={styles.inputForm}>
          <input className={mode === 'light' ? styles.light_inp : styles.dark_inp} type='password' placeholder='현재 비밀번호 입력' onChange={(e) => setPassword(e.target.value)} style={mode === 'light' ? {borderColor: '#ACB2CB', color: '#191919', background: '#F3F5F7'} : {borderColor: '#6F738E', color: '#fff', background: '#2B2E44'}}/>
          <input className={mode === 'light' ? styles.light_inp : styles.dark_inp} type='password' placeholder='새로운 비밀번호 입력' onChange={(e) => setNewPassword(e.target.value)} style={mode === 'light' ? {borderColor: '#ACB2CB', color: '#191919', background: '#F3F5F7'} : {borderColor: '#6F738E', color: '#fff', background: '#2B2E44'}}/>
          <input className={mode === 'light' ? styles.light_inp : styles.dark_inp} type='password' placeholder='새로운 비밀번호 입력 (확인)' onChange={(e) => setCheckPassword(e.target.value)} style={mode === 'light' ? {borderColor: '#ACB2CB', color: '#191919', background: '#F3F5F7'} : {borderColor: '#6F738E', color: '#fff', background: '#2B2E44'}}/>
        </div>
        <p>{message}</p>
        <div className={styles.btn}>
          <input type='submit' value="변경하기" />
        </div>
      </form>
    </div>
  )
}

export default PasswordChange
