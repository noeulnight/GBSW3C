import React from "react";
import styles from './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from "./pages/Login";
import Main from './pages/Main'
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import useSessionStorage from "./components/UseSessionStorage";

function App () {
  const [ login, isLogin ] = useSessionStorage("login", false)
  const [ grade, setGrade ] = useSessionStorage("grade", 0)
  const [ mode, setMode ] = useSessionStorage("mode", 'light')
  
  if(!login) {
    return (
      <div>
        <Login isLogin={isLogin} setGrade={setGrade}/>
      </div> 
    )
  } else if(login) {
    if(true){ // grade에 따라서 바꾸기
      return (
        <div>
          <Header mode={mode} setMode={setMode} />
          <Navigation grade={grade} mode={mode}/>
          <Routes>
            <Route path="/" element={<Main grade={grade} />} />
          </Routes>
        </div>
      )
    }
  }
}

export default App