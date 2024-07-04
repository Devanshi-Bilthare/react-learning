import React, { useState } from 'react'

const App = () => {
  const [val,setVal] = useState(0)
  const changeValue = (x)=>{
    setVal(x)
  }

  const formHandler = (e)=>{
    e.preventDefault()
    console.log(e)
  }

  
  return (
    <div>
      <h2>{val}</h2>
      {/* <button onClick={changeValue}>Change value</button> */}
      <button onClick={() => changeValue(15)}>change val</button>

      <form onSubmit={formHandler}>
        <input type="text" />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
