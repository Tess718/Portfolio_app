import React from 'react'
import Home from './pages/home/home'
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  AOS.init();
  return (
    <div>
      <Home/>
    </div>
  )
}

export default App
