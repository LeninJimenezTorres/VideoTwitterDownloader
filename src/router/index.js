import React from 'react'
import {Route, Routes, HashRouter  } from "react-router-dom";
import {Home,Developer,Donations} from "../pages/index"

function Router() {
  return (
    <HashRouter>
      <Routes basename={process.env.PUBLIC_URL}>
          <Route exact element={<Home/>} path="/"/>
          <Route exact element={<Donations/>} path="/donations"/>
          <Route exact element={<Developer/>} path="/developer"/>
      </Routes>
    </HashRouter>

  )
}

export default Router