import React, { useState, useCallback } from "react";
import './App.css'
import { Route, Routes } from 'react-router-dom';
import StudentSubmitPostPage from './pages/sub/StudentSubmitPostPage'
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Login from "./pages/Login";
import StudentMain from './pages/StudentMain'
import TeacherMain from "./pages/TeacherMain";
import AdminMain from "./pages/AdminMain"
import HallOfFame from './pages/HallOfFame'
import Profile from './pages/Profile'
import Introduce from "./pages/3C_Introduce";
import useSessionStorage from "./components/UseSessionStorage";
import Logout from './pages/Logout'
import './css/Reset.modele.scss'

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
        <Login isLogin={isLogin} setGrade={setGrade}/>
      </div>
    )
  } else if(login) {
    if(grade == 0){ // grade에 따라서 바꾸기
      return (
        <div>
            <Routes>
              <Route path="/" element={<StudentMain mode={mode} isOpen={isOpen} />} />
              <Route path="/submit" element={<StudentSubmitPostPage mode={mode} isOpen={isOpen} />} />
              <Route path="/logout" element={<Logout isLogin={isLogin} />} />
              <Route path="/ranking" element={<HallOfFame mode={mode} isOpen={isOpen}/>} />
              <Route path="/profile" element={<Profile mode={mode} isOpen={isOpen}/>} />
              <Route path="/introduce" element={<Introduce isOpen={isOpen} />} />
            </Routes>
          <Header mode={mode} setMode={setMode} isOpen={isOpen} setMenu={setMenu}/>
          <Navigation grade={grade} mode={mode} isOpen={isOpen} />
        </div>
      )
    } else if (grade == 1) {
        return (
          <div>
          <Routes>
            <Route path="/" element={<TeacherMain mode={mode} isOpen={isOpen} />} />
            <Route path="/logout" element={<Logout isLogin={isLogin} />} />
          </Routes>
          <Header mode={mode} setMode={setMode} isOpen={isOpen} setMenu={setMenu} />
          <Navigation grade={grade} mode={mode} isOpen={isOpen} />
        </div>
      )
    } else if (grade == 2) {
      return (
        <div>
          <Routes>
            <Route path="/" element={<AdminMain page={activePage} mode={mode} isOpen={isOpen} />} />
            <Route path="/logout" element={<Logout isLogin={isLogin} />} />
          </Routes>
          <Header mode={mode} setMode={setMode} isOpen={isOpen} setMenu={setMenu} />
          <Navigation grade={grade} mode={mode} isOpen={isOpen} page={activePage} onChangePage={onChangePage} />
        </div>
      )
    }
  }
}

export default App