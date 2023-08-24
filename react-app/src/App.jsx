import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'


import 'bootstrap/dist/css/bootstrap.min.css';

import LoginPage from './components/Login'
import HomePage from './components/Home'
import Register from './components/Register';
import Reset from './components/Reset';
import Wrapper from './components/Wrapper';

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <Routes>
        <Route path='/' element={<Wrapper />} />
        <Route path='/register' element={<Register />} />
        <Route path='/reset-password' element={<Reset />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
