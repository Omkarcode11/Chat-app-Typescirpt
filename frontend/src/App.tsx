import { useState } from 'react'
import './App.css'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Signup from './pages/signup/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-4 h-screen flex items-center justify-center '>
    {/* <Login/> */}
    <Home/>
    {/* <Signup/> */}
    </div>
  )
}

export default App
