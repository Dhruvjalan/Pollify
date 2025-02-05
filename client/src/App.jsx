import { useState } from 'react'
import Search from './Search'
import Signup from  './Signup'
import Login from  './Login'
import UserHome from './UserHome'
import Create from './create'
import BlogDetails from './BlogDetails'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/register' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/:user/home' element={<UserHome />}></Route>
      <Route path='/:user/create' element={<Create />}></Route>
      <Route path='/:user/:id/Detail' element={<BlogDetails />}></Route>
      <Route path='/:user/Search' element={<Search />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
