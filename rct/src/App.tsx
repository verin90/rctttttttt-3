import { useState } from 'react'
import './App.css'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Header from './Header.tsx'
import Manepg from './Mane/Manepg.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/'index element = {<Manepg/>} />
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
