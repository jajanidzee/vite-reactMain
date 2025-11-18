import React from 'react'
import "./Button.css"
function Buttons({btn1, btn2}) {
  return (
    <div className='ButtonDiv'>
<button className="btn1">{btn1}</button>
<button className="btn2">{btn2}</button>
    </div>
  )
}

export default Buttons