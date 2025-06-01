import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import axios from 'axios';
import GetAstro from './components/GetAstro'
import HomePage from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';

function App() {

  return (
    <>
      {/* <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css"
        integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7"
        crossOrigin="anonymous"
      /> */}
      <HomePage />
      {/* < GetAstro year={2000} month={10} day={26} /> */}
    </>
  )
}

export default App
