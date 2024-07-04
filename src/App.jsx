import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [names,setNames] = useState([])
  // const submitHandler = (e)=>{
  //   e.preventDefault()
  //   console.log(e.target.name.value)
  // }

  const submitHandler = (e) => {
    e.preventDefault();
    
    const copyNames = [...names]
    copyNames.push(username)
    setNames(copyNames)

    // setNames([...names,username])
    
    setUsername("")

    
  };
  console.log(names)


  // const changeHandler = (e) => {
  //   setUsername(e.target.value)
  // }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
