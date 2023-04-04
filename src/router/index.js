import React from 'react'
import {Route, Routes } from "react-router-dom";
import {Home,Developer,Donations} from "../pages/index"

function Router() {
  return (
    <Routes>
        <Route exact element={<Home/>} path="/"/>
        <Route exact element={<Donations/>} path="/donations"/>
        <Route exact element={<Developer/>} path="/developer"/>
    </Routes>

  )
}

export default Router