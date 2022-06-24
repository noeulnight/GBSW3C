import React, { useState } from "react";
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Login from "./pages/Login";
import StudentMain from './pages/StudentMain'
import TeacherMain from "./pages/TeacherMain";
import useSessionStorage from "./components/UseSessionStorage";
import Logout from './pages/Logout'
import './css/Reset.modele.scss'

function App () {
  const [ isOpen, setMenu ] = useState(true);
  const [ login, isLogin ] = useSessionStorage("login", false)
  const [ grade, setGrade ] = useSessionStorage("grade", 0)
  const [ mode, setMode ] = useSessionStorage("mode", 'light')
  
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
          <Header mode={mode} setMode={setMode} isOpen={isOpen} setMenu={setMenu}/>
          <Navigation grade={grade} mode={mode} isOpen={isOpen} />
          <Routes>
            <Route path="/" element={<StudentMain mode={mode} isOpen={isOpen} />} />
            <Route  path="/logout" element={<Logout isLogin={isLogin} />} />
          </Routes>
        </div>
      )
    } else if (grade == 1) {
      return (
        <div>
          <Header mode={mode} setMode={setMode} isOpen={isOpen} setMenu={setMenu} />
          <Navigation grade={grade} mode={mode} isOpen={isOpen} />
          {/* <Routes>
            <Route path="/" element={<TeacherMain mode={mode} isOpen={isOpen} />} />
            <Route path="/logout" element={<Logout isLogin={isLogin} />} />
          </Routes> */}
        </div>
      )
    } else if (grade == 2) {
      return (
        <div>
          <Header mode={mode} setMode={setMode} isOpen={isOpen} setMenu={setMenu} />
          <Navigation grade={grade} mode={mode} isOpen={isOpen} />
          {/* <Routes>
            <Route path="/" element={<TeacherMain mode={mode} isOpen={isOpen} />} />
            <Route path="/logout" element={<Logout isLogin={isLogin} />} />
          </Routes> */}
        </div>
      )
    }
  }
}

export default App