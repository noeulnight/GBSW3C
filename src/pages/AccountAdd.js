import React, { useEffect, useState, createRef } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Editor } from '@toast-ui/react-editor'
import '@toast-ui/editor/dist/toastui-editor.css'
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

import { FaChevronLeft, FaChevronRight, FaPlus, FaBackspace, FaDownload } from "react-icons/fa";
import Select from 'react-select'
import { useNavigate, Link } from "react-router-dom";

import styles from "../css/AccountAdd.module.scss"
const AccountAdd = ({ mode, isOpen,  onChangePage }) => {
  const editor = createRef()
  const [loading, setLoading] = useState(true)
  const [departs, setDeparts] = useState(null)
  const [depart, setDepart] = useState(null) 
  const [name, setName] = useState(null)
  const [cardinal, setCardinal] = useState(null)
  const [phone, setPhone] = useState(null)
  const [message, setMessage] = useState(null)
  const navigation = useNavigate()
  
  useEffect(() => {
    (async () => {
      const res = await fetch('/api/auth/v1/departs').then((res) => res.status === 403 ? window.location.reload() : res.json())
      setDeparts(res.data)
      setLoading(false)
    })()
  }, [])

  async function onSubmit (e) {
    e.preventDefault()

    setLoading(true)
    const data = await fetch('/api/auth/v1/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({
          cardinal,
        users: [
          { name, phone }
        ],
        dep: depart
      })
    }).then((res) => res.status === 403 ? window.location.reload() : res.json())

    if (data.success) {
      onChangePage(5)
      return
    }

    setLoading(false)
    setMessage('오류가 발생했습니다! 모두 입력했는지 확인한 후 다시 시도해 보세요')
  }
// 킹무일 (짱)
  return (
      <>
      {loading && (
        <div style={{
          position: 'absolute',
          top: '-64px', left: '-286px',
          width: '100vw', height: '100vh',
          zIndex: 1000, backgroundColor: '#00000099', 
          display: 'flex', justifyContent: 'center', 
          alignItems: 'center', color: 'white' }}>
          처리중입니다...
        </div>
      )}
      <div className={isOpen === true ? styles.open_main : styles.hide_main}>
        <div
            className={styles.navbar}
            style={
              mode === "light"
                ? { background: "#F3F5F7" }
                : { background: "#2B2E44" }
            }
          >
            <div>
              <Link
                to="/"
                style={
                  mode === "light" ? { color: "#ACB2CB" } : { color: "#6F738E" }
                }
              >
                <div>
                  <FaChevronLeft size={24} />{" "}
                </div>
                돌아가기
              </Link>
            </div>
            <div>
              <button 
                onClick={onSubmit}
                to="/submit"
                style={
                  mode === "light" ? { color: "#ACB2CB" } : { color: "#6F738E" }
                }
              >
                <div>
                  <FaChevronRight size={24} />{" "}
                </div>
                다음으로
              </button>
            </div>
          </div> 
        <form className={styles.listBox} onSubmit={(e) => onSubmit(e)}>
          <div className={styles.Box} style={mode === 'light' ? {background: '#FFF', color: '#ACB2CB'} : {background: '#2F3146', color: '#6F738E'}}>
            <div className={styles.listBoxHeader}>
              <div style={mode === 'light' ? {color: '#191919'} : {color: '#FFF'}}>신청하기</div>
            </div>
            <div className={styles.category}>
              <div>
                <div>
                  <div>
                    <p>이름</p>
                    <input 
                      required
                      type="text" 
                      placeholder="이름" 
                      onChange={(e) => setName(e.target.value)}
                      style={mode === 'light'
                        ? {color: "#191919", background: '#F3F5F7', border: "1px solid #ACB2CB", padding: '8px', borderRadius: '5px' }
                        : {color: '#6F738E', background: '#2B2E44', border: "1px solid #6F738E", padding: '8px', borderRadius: '5px'}
                      } 
                    />
                  </div>
                  <div>
                    <p>기수</p>
                    <input 
                      required
                      type="number" 
                      placeholder="기수" 
                      onChange={(e) => setCardinal(e.target.value)}
                      style={mode === 'light'
                        ? {color: "#191919", background: '#F3F5F7', border: "1px solid #ACB2CB", padding: '8px', borderRadius: '5px' }
                        : {color: '#6F738E', background: '#2B2E44', border: "1px solid #6F738E", padding: '8px', borderRadius: '5px'}
                      } 
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <p>전화번호</p>
                    <input 
                      required
                      type="text" 
                      maxLength="13"
                      onChange={(e) => setPhone(e.target.value)}
                      pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                      placeholder="하이픈(-)을 포함하여 전화번호를 입력해주세요." 
                      style={mode === 'light'
                        ? {color: "#191919", background: '#F3F5F7', border: "1px solid #ACB2CB", padding: '8px', borderRadius: '5px' }
                        : {color: '#6F738E', background: '#2B2E44', border: "1px solid #6F738E", padding: '8px', borderRadius: '5px'}
                      } 
                    />
                  </div>
                  <div>
                    <p>학과 선택</p>
                    <Select
                      styles={{
                        control: (provided) => ({
                          cursor: 'pointer',
                          ...provided,
                          ...(mode == "light"
                            ? {
                                border: "1px solid #ACB2CB",
                                backgroundColor: "#F3F5F7",
                              }
                            : {
                                border: "1px solid #6F738E",
                                backgroundColor: "#2B2E44",
                              }),
                        }),
                        singleValue: (provided) => ({
                          ...provided,
                          ...(mode == "light"
                          ? { color: "#8993A7" }
                          : { color: "#8C8EA0" }),
                        }),
                        menuList: (provided) => ({
                          ...provided,
                          ...(mode == "light"
                            ? {
                              border: "1px solid #ACB2CB",
                            }
                            : {
                              border: "1px solid #6F738E",
                    }),
                            singleValue: (provided) => ({
                              ...provided,
                              ...(mode == "light"
                              ? { color: "#8993A7" }
                              : { color: "#8C8EA0" }),
                            }),
                            menuList: (provided) => ({
                              ...provided,
                              ...(mode == "light"
                                ? {
                                  border: "1px solid #ACB2CB",
                                }
                                : {
                                  border: "1px solid #6F738E",
                                }),

                            }),
                            menu: (provided) => ({
                              ...provided,
                              ...(mode == "light"
                                ? {
                                  color: "black",
                                  backgroundColor: "#F3F5F7",
                                }
                                : {
                                  color: "white",
                                  backgroundColor: "#383850",
                                }),
                            }),
                            option: (provided, state) => ({
                              ...provided,
                              zIndex: 50,
                              ...(mode == "light"
                                ? {
                                  color: state.isFocused ? 'white' : "black",
                                  backgroundColor: state.isFocused ? 'rgb(6, 132, 196)' :  "#F3F5F7",
                                }
                                : {
                                  color: state.isFocused ? 'white' : "white",
                                  backgroundColor: state.isFocused ? 'rgb(6, 132, 196)' : "#383850",
                                }),
                            }),
                        }),
                        container: (provided) => ({
                          ...provided,
                          zIndex: 50,
                        }),
                      }}
                      isSearchable={false}
                      onChange={(e) => setDepart(e.value)}
                      options={departs?.filter((v) => v.depid > 1).map((v) => ({ value: v.depid, label: v.desc })) || []}
                      placeholder="학과를 선택하세요."/>
                  </div>
                </div>
              </div>
            </div>
            <p style={{
              ...(mode == "light"
              ? {
                color: 'black'
              }
              : {
                color: 'white'
              })
            }}>
            {message}
            </p>
            <button className={styles.btn} type="submit" style={{ cursor: 'pointer', alignSelf: 'center', border: 'none', backgroundColor: 'rgb(6, 132, 196)', color: 'white', padding: 10, fontSize: 16, borderRadius: 4}}>
              제출
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AccountAdd
