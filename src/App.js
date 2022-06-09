import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Login from "./pages/Login.js";
import Navigation from "./components/Navigation.js";
import Header from "./components/Header.js";
import useSessionStorage from "./components/UseSessionStorage.js";

function App () {
  const [ login, isLogin ] = useSessionStorage("login", false)

  if(!login) {
    return (
      <div>
        <Login isLogin={isLogin}/>
      </div> 
    )
  } else if(login) {
    return (
      <div>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigation />} />
        </Routes>
      </div>
    )
  }
}

export default App