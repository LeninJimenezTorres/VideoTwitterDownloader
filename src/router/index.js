import React from 'react'
import {Route, Routes } from "react-router-dom";
import {Home,Developer,Donations} from "../pages/index"

function Router() {
  const urlGitRepository = "/VideoTwitterDownloader"
  return (
    <Routes basename={process.env.PUBLIC_URL}>
        <Route exact element={<Home/>} path={"/VideoTwitterDownloader/"}/>
        <Route exact element={<Donations/>} path={"/VideoTwitterDownloader/donations"}/>
        <Route exact element={<Developer/>} path={"/VideoTwitterDownloader/developer"}/>
    </Routes>

  )
}

export default Router