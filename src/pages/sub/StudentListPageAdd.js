import React, { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { Link, useNavigate } from "react-router-dom";
import {
  HiChevronLeft,
  HiChevronRight,
  HiChevronDown,
  HiPlus,
  HiX,
  HiCheck,
  HiTrash,
  HiPencil
} from "react-icons/hi";
import { FaCheck, FaPlus, FaTrashAlt } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import styles from "../../css/StudentList.module.scss";

const StudentListPageAdd = ({ mode }) => {
const [fullChecked, setFullchecked] = useState(false);
  const [items, setItems] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await fetch('/api/auth/v1/students/filter')
        .then((res) => res.json())
      
      setItems(res.data.map((v) => ({
        name: v.name,
        id: v.userid,
        keys: `${v.cardinal}기`,
        department: "소프트웨어개발과",
        phone: v.phone
      })))
    })()
  }, [])

  const onCheck = (index) => () => {
    items[index].checked = !items[index].checked;
    setItems([...items]);
    setFullchecked(false);
  };

  const onFullCheck = () => {
    setItems([...items.map((v) => ({ ...v, checked: !fullChecked }))]);
    setFullchecked(!fullChecked);
  };
    return (
      <>
       <div className={isOpen === true ? styles.open_main : styles.hide_main}>
        <div className={styles.listHeader} style={mode === 'light' ? {color: '#191919'} : {color: '#fff'}}>
          <div className={styles.title}>
            학생 페이지/신청리스트/<span style={{color: '#0684c4'}}>신청하기</span>
          </div>
        </div>
        <div className={styles.listBox}>
          <div className={styles.Box} style={mode === 'light' ? {background: '#FFF', color: '#ACB2CB'} : {background: '#2F3146', color: '#6F738E'}}>
            <div className={styles.listBoxHeader}>
              <div style={mode === 'light' ? {color: '#191919'} : {color: '#FFF'}}>신청하기</div>
            </div>
            <div className={styles.category}>
              <div>
              <p>카테고리 선택</p>
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
                  placeholder: (provided) => ({
                    ...provided,
                    ...(mode == "light"
                      ? {
                        color: '#8993A7'
                      }
                      : {
                        color: '#8C8EA0'
                      }),
                  })
                }}
                isSearchable={false}
                onChange={onCategoryChange}
                options={categories?.map((v) => ({ value: v.categoryId, label: v.label })) || []}
                placeholder="카테고리를 선택하세요."/>
              </div>
              <div>
              <p>서브 카테고리 선택</p>
              <Select
                styles={{
                  control: (provided) => ({
                    cursor: 'pointer',
                    ...provided,
                    ...(mode == "light"
                      ? {
                          opacity: category ? 1 : 0.4,
                          border: "1px solid #ACB2CB",
                          backgroundColor: "#F3F5F7", 
                        }
                      : {
                          opacity: category ? 1 : 0.4, 
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
                  placeholder: (provided) => ({
                    ...provided,
                    ...(mode == "light"
                      ? {
                        color: '#8993A7'
                      }
                      : {
                        color: '#8C8EA0'
                      }),
                  })
                }}
                isSearchable={false}
                isDisabled={!category}
                onChange={onSubCategoryChange}
                options={category ? categories.find((v) => v.categoryId === category).children.map((v) => ({ value: v.subcategoryId, label: v.label })) : []}
                placeholder="카테고리 선택해주세요."/>
              </div>
            </div>
            <div className={styles.editor}>
              <p>간단한 설명 (선택)</p>
              <div style={{height: '100%'}} className={mode === 'light' ? styles.light_edit : styles.dark_edit}>

                <Editor
                  usageStatistics={false}
                  ref={editor}
                  hooks={{ addImageBlobHook }}
                  initialEditType="wysiwyg"
                  hideModeSwitch height="100%"
                  key={mode} theme={mode !== 'light' ? 'dark' : undefined} 
                  onChange={(e) =>
                    setContent(editor.current.getInstance().getHTML())}/>

              </div>
            </div>
            <div className={styles.btn}>
              <Link to="/">
                <button className={styles.cancelbtn} style={{ alignSelf: 'center', cursor: 'pointer', border: 'none', backgroundColor: 'gray', color: 'white', padding: 10, fontSize: 16, borderRadius: 4}}>
                  취소
                </button>
              </Link>
              <button onClick={onSubmit} className={styles.submitbtn} style={{ marginLeft: 10, cursor: 'pointer', alignSelf: 'center', border: 'none', backgroundColor: 'rgb(6, 132, 196)', color: 'white', padding: 10, fontSize: 16, borderRadius: 4}}>
                다음
              </button>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentListPageAdd;
