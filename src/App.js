import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Login from "./pages/Login";
import Main from './pages/Main'
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import useSessionStorage from "./components/UseSessionStorage";

function App () {
  const [ login, isLogin ] = useSessionStorage("login", false)
  const [ grade, setGrade ] = useSessionStorage("grade", 0);

  if(!login) {
    return (
      <div>
        <Login isLogin={isLogin} setGrade={setGrade}/>
      </div> 
    )
  } else if(login) {
    if(true){
      return (
        <div>
          <Header />
          <Navigation grade={grade}/>
          <Routes>
            <Route path="/" element={<Main grade={grade} />} />
          </Routes>
        </div>
      )
    }
  }
}

export default App