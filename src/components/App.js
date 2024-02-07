
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [input,setinput]=useState("")
  return (
    <div>
     <h3>Enter Your Name</h3>
     <input type="text" onChange={(e)=>{
      setinput(e.target.value);
     }}></input>
     <p>{input}</p>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
