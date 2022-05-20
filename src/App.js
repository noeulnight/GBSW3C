import React, { useState } from "react";
import Login from "./pages/Login.js";
import { Route, Routes } from 'react-router-dom';
import Navigation from "./components/Navigation.js";

function App () {
  const [ login, isLogin ] = useState(false)

  if(!login) {
    return (  
      <div>
        <Login isLogin={isLogin}/>
      </div> 
    )
  } else if(login) {
    return (
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigation />} />
        </Routes>
      </div>
    )
  }
}

export default App