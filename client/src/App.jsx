import { useState, useEffect} from 'react'
import Search from './Search'
import Home from './Home'
import Signup from  './Signup'
import Login from  './Login'
import UserHome from './UserHome'
import Create from './createtodo'
import Edit from './edittodo'
import BlogDetails from './BlogDetails'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useNavigate } from "react-router-dom";


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/register' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/:user' element={<Navigate to='home' replace />} />
      <Route path='/:user/home/' element={<UserHome />}></Route>
      <Route path='/:user/create' element={<Create />}></Route>
      <Route path='/:user/edit/:index' element={<Edit />}></Route>
      
      <Route path='/:user/:id/Detail' element={<BlogDetails />}></Route>
      <Route path='/:user/Search' element={<Search />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
