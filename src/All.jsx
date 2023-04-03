import React from 'react'
import './all.css'
export const All = () => {
const func = () =>{
    document.getElementById('ohk').innerHTML=alert("hello")
}

 

  return (
    <>
    <div id='ohk' >
    <button onClick={func} >Submit</button>
    </div>
    </>
  )
}

export default  All;

