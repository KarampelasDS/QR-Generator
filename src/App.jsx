import { useState, useRef } from 'react'
import './App.css'
import QRCode from 'react-qr-code'
import Button from './components/Button'
import * as htmlToImage from 'html-to-image';
import * as FileSaver from 'file-saver';

function App() {
  const [link, setLink] = useState("www.google.com");

  const printPng = () => {
  htmlToImage.toBlob(document.getElementById('QRCode'))
    .then(function (blob) {
      if (window.saveAs) {
        window.saveAs(blob, 'qr-code.png');
      } else {
       FileSaver.saveAs(blob, 'qr-code.png');
     }
    });
  }

  return (
    <div className='Container'>
      <h1 className='Title'>Simple QR Code Generator</h1>
      <QRCode size={512} className='QRCode' id="QRCode" value={link} />
      <input className='Input' maxLength={300} type='text' value={link} onChange={(e)=>{setLink(e.target.value)}}/>
      <div className='Downloads' onClick={printPng}>
      <Button>Save PNG</Button>
      </div>
    </div>
  )
}

export default App
