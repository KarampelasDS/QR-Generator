import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QRCode from 'react-qr-code'

function App() {
  const [link, setLink] = useState("www.google.com")

  return (
    <div className='Container'>
      <QRCode value={link} />
      <input type='text' value={link} onChange={(e)=>{setLink(e.target.value)}}/>
    </div>
  )
}

export default App
