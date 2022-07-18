import React, { useState, useCallback } from "react";
import './App.css'
import { Route, Routes } from 'react-router-dom';
import StudentSubmitPostPage from './pages/sub/StudentSubmitPostPage'
import StudentSubmitFilePage from './pages/sub/StudentSubmitFilePage'
import StudentSubmitView from './pages/sub/StudentSubmitView'
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Login from "./pages/Login";
import StudentMain from './pages/StudentMain'
import TeacherMain from "./pages/TeacherMain";
import AdminMain from "./pages/AdminMain"
import HallOfFame from './pages/HallOfFame'
import Profile from './pages/Profile'
import Introduce from "./pages/3C_Introduce";
import IntroduceNonav from "./pages/3C_Introduce_nonav";
import useSessionStorage from "./components/UseSessionStorage";
import Logout from './pages/Logout'
import PasswordChange from './pages/PasswordChange'
import './css/Reset.modele.scss'
import Statistic from './pages/Statistics';
import ScoringArea from './pages/ScoringArea'
import AccountList from './pages/AccountList'
import Account from './pages/sub/ScoringAreaAdd'
import ScoringAreaAdd from "./pages/sub/ScoringAreaAdd";
import ScoringAreaAddSecond from "./pages/sub/ScoringAreaAddSecond";
import StudentListPageAdd from "./pages/sub/StudentListPageAdd";

function App () {
  const [ isOpen, setMenu ] = useState(true);
  const [ login, isLogin ] = useSessionStorage("login", false)
  const [ grade, setGrade ] = useSessionStorage("grade", 0)
  const [ mode, setMode ] = useSessionStorage("mode", 'light')
  const [ activePage, setActivePage ] = useState(1)

  const onChangePage = useCallback(page => {
    setActivePage(page);
    console.log(page)
  }, [activePage])

  if(mode == 'dark') {
    document.body.className = 'dark_body' 
  } else if(mode == 'light'){
    document.body.className = 'light_body'
  }

  if(!login) {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Login isLogin={isLogin} setGrade={setGrade}/>} />
          <Route path="/introduce" element={<IntroduceNonav isOpen={isOpen} mode={mode}/>} />
        </Routes>
      </div>
    )
  } else if(login) {
    if(grade == 0){ // grade에 따라서 바꾸기
      return (
        <div>
            <Routes>
              <Route path="/" element={<StudentMain onChangePage={onChangePage} mode={mode} isOpen={isOpen} selectPage={activePage} />} />
              <Route path="/submit" element={<StudentSubmitPostPage mode={mode} isOpen={isOpen} />} />
              <Route path="/posts/:id" element={<StudentSubmitView mode={mode} isOpen={isOpen} />} />
              <Route path="/edit/:id" element={<StudentSubmitView mode={mode} isOpen={isOpen} />} />
              <Route path="/upload/:id" element={<StudentSubmitFilePage mode={mode} isOpen={isOpen} />} />
              {/* <Route path="/ranking" element={<HallOfFame mode={mode} isOpen={isOpen}/>} />
              <Route path="/profile" element={<Profile mode={mode} isOpen={isOpen}/>} />
              <Route path="/introduce" element={<Introduce isOpen={isOpen} mode={mode}/>} /> */}
              <Route path="/logout" element={<Logout isLogin={isLogin} />} />
              <Route path="/resetpw" element={<PasswordChange isOpen={isOpen} mode={mode} />} />
            </Routes>
          <Header mode={mode} setMode={setMode} isOpen={isOpen} setMenu={setMenu} />
          <Navigation grade={grade} mode={mode} isOpen={isOpen} page={activePage} onChangePage={onChangePage} />
        </div>
      )
    } else if (grade == 1) {
        return (
          <div>
          <Routes>
            <Route path="/" element={<TeacherMain mode={mode} isOpen={isOpen} />} />
            <Route path="/logout" element={<Logout isLogin={isLogin} />} />
              <Route path="/posts/:id" element={<StudentSubmitView mode={mode} isOpen={isOpen} />} />
          </Routes>
          <Header mode={mode} setMode={setMode} isOpen={isOpen} setMenu={setMenu} />
          <Navigation grade={grade} mode={mode} isOpen={isOpen} />
        </div>
      )
    } else if (grade == 2) {
      return (
        <div>
          <Routes>
            <Route path="/" element={<AdminMain selectPage={activePage} onChangePage={onChangePage} mode={mode} isOpen={isOpen} />} />
            <Route path="/stat" element={<Statistic page={activePage} mode={mode} isOpen={isOpen} />} />
            <Route path="/acc" element={<AccountList page={activePage} mode={mode} isOpen={isOpen} />} />
            <Route path="/area" element={<ScoringArea page={activePage} mode={mode} isOpen={isOpen} />} />
            <Route path="/sco" element={<StudentListPageAdd page={activePage} mode={mode} isOpen={isOpen} />} />
            <Route path="/logout" element={<Logout isLogin={isLogin} />} />
            <Route path="/account" element={<Account mode={mode} isOpen={isOpen} />} />
            <Route path="/posts/:id" element={<StudentSubmitView mode={mode} isOpen={isOpen} />} />
            <Route path="/ScoringAreaAdd" element={<ScoringAreaAdd mode={mode} isOpen={isOpen} />} />
            <Route path="/ScoringAreaAddSecond" element={<ScoringAreaAddSecond mode={mode} isOpen={isOpen} />} />
          </Routes>
          <Header mode={mode} setMode={setMode} isOpen={isOpen} setMenu={setMenu} />
          <Navigation grade={grade} mode={mode} isOpen={isOpen} page={activePage} onChangePage={onChangePage} />
        </div>
      )
    }
  }  
}

export default App
