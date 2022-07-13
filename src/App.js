import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/HomePage/Home"
import Register from '../src/pages/Auth/Register/Register'
import Login from '../src/pages/Auth/Login/Login'
import Verify from '../src/pages/Auth/Verify/Verify'

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/auth/Register" element={<Register/>}/>
          <Route path="/auth/Login" element={<Login />} />    
          <Route path="/auth/Verify" element={<Verify />} />    
          <Route path="*" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;