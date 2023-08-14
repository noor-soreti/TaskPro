import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import LoginPage from './components/Login'
import HomePage from './components/Home'



function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
