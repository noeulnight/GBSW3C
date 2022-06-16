import React from "react";
import styles from './App.css'
import { Route, Routes } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Login from "./pages/Login";
import StudentMain from './pages/StudentMain'
import TeacherMain from "./pages/TeacherMain";
import useSessionStorage from "./components/UseSessionStorage";

function App () {
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
          <Header mode={mode} setMode={setMode} />
          <Navigation grade={grade} mode={mode} />
          <Routes>
            <Route path="/" element={<StudentMain mode={mode} />} />
          </Routes>
        </div>
      )
    } else if (grade == 1) {
      return (
        <div>
          <Header mode={mode} setMode={setMode} />
          <Navigation grade={grade} mode={mode} />
          <Routes>
            <Route path="/" element={<TeacherMain mode={mode} />} />
          </Routes>
        </div>
      )
    } else if (grade == 2) {
      return (
        <div>
          <Header mode={mode} setMode={setMode} />
          <Navigation grade={grade} mode={mode} />
          <Routes>
            <Route path="/" element={<TeacherMain mode={mode} />} />
          </Routes>
        </div>
      )
    }
  }
}

export default App