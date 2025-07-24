
import { Fragment } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
      <Navbar />
      <div className='bg-[url("/hero.jpg")] bg-cover bg-center min-h-[100svh] min-w-[100svw] flex flex-col gap-8 items-center justify-center'>
        <h1 className='font-Amazon font-bold text-4xl text-[#232f3e]'>Mi app desplegada en AWS</h1>
        <div className='w-[400px]'>
          <img src="/Amazon_Web_Services_Logo.svg.png" alt="hero background" loading='lazy'/>
        </div>
      </div>
    </>

  )
}

export default App
