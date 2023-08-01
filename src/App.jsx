import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import NuestroProyecto from './components/NuestroProyecto'
import NuestroServicios from './components/NuestroServicios'
import Proposito from './components/Proposito'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <NuestroProyecto/>
      <NuestroServicios/>
      <Proposito/>
      <Footer/>
     
    </>
  )
}

export default App
