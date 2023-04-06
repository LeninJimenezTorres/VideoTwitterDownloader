import React from 'react'
import {Route, Routes } from "react-router-dom";
import {Home,Developer,Donations} from "../pages/index"

function Router() {
  const urlGitRepository = "/VideoTwitterDownloader"
  return (
    <Routes basename={process.env.PUBLIC_URL}>
        <Route exact element={<Home/>} path={"https://leninjimeneztorres.github.io/VideoTwitterDownloader/"}/>
        <Route exact element={<Donations/>} path={"https://leninjimeneztorres.github.io/VideoTwitterDownloader/donations"}/>
        <Route exact element={<Developer/>} path={"https://leninjimeneztorres.github.io/VideoTwitterDownloader/developer"}/>
    </Routes>

  )
}

export default Router