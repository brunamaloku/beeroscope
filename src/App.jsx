import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/HomePage'
import axios from 'axios';
import GetAstro from './components/GetAstro'

function App() {

  return (
    <>
      <GetAstro/>
    </>
  )
}

export default App
