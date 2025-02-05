import { useState, useRef } from 'react'
import './App.css'
import QRCode from 'react-qr-code'
import Button from './components/Button'
import * as htmlToImage from 'html-to-image';
import * as FileSaver from 'file-saver';
import { SketchPicker } from 'react-color';

function App() {
  const [link, setLink] = useState("www.google.com");
  const [color,setColor] = useState("#000000");
  const [bgColor,setBgColor] = useState("#ffffff");

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
      <QRCode style={{backgroundColor: bgColor}} fgColor={color} bgColor={bgColor} size={400} className='QRCode' id="QRCode" value={link} />
      <input className='Input' maxLength={300} type='text' value={link} onChange={(e)=>{setLink(e.target.value)}}/>
      
      <div className='ColorsContainer'>
        <div className='ColorPicker'>
          <span>Foreground Color</span>
          <button className='ColorButton' style={{backgroundColor:color}} onClick={()=>{console.log("among")}}/>
          <SketchPicker
          color={color}
          onChange={(color)=>{setColor(color.hex)}}
          disableAlpha={true}
          />
        </div>
    
        <div className='ColorPicker'>
          <span>Background Color</span>
          <button className='ColorButton' style={{backgroundColor:bgColor}} onClick={()=>{console.log("among")}}/>
          <SketchPicker
          color={bgColor}
          onChange={(bgColor)=>{setBgColor(bgColor.hex)}}
          disableAlpha={true}
          />
        </div>
      </div>

      <div className='Downloads' onClick={printPng}>
      <Button>Save PNG</Button>
      </div>
      
    </div>
  )
}

export default App
