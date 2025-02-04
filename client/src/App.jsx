import { useState } from 'react'

import Signup from  './Signup'
import Login from  './Login'
import UserHome from './UserHome'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/register' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route exact path='/:user/home' element={<UserHome />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
