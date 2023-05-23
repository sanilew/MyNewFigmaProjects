import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "./DashboardPages/Home"
import Category from "./DashboardPages/Category"
import { BrowserRouter } from 'react-router-dom/dist'

function Routeall() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={"Home"}/>
        <Route  path="/:categoryId" element={<Category/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routeall
