import React from "react";
import Login from "./pages/Login.js";
import { Route, Routes } from 'react-router-dom';

function App () {
  return (  
    <div>
      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div> 
  )
}

export default App