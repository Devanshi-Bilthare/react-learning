import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("incomplete");
  const [desc, setDesc] = useState("");

  const [tasks,setTasks] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    setTasks([...tasks,{title,status,desc}])

    setTitle("")
    setDesc("")
    setStatus("incomplete")
  }

  console.log(tasks)

  return (
    <div className="w-full min-h-screen bg-stone-800 p-2">
      <form onSubmit={submitHandler} className="w-[30%] m-auto mt-10">
        <input type="text"
         placeholder="Enter Title" 
         className="w-full p-2" 
         onChange={(e)=> setTitle(e.target.value)}
         value={title}
         />
        <label htmlFor="" className="w-full p-2 text-white flex gap-2">
          <input type="radio"
          onChange={(e)=> setStatus("complete")}
          checked={status === 'complete' ? true:false}
          />
          Complete
          <input type="radio" 
          onChange={(e)=> setStatus("incomplete")}
          checked={status ==='incomplete'?true:false}
          />
          Incomplete
        </label>
        <textarea
          placeholder="Enter description"
          className="w-full p-2"
          onChange={(e)=> setDesc(e.target.value)}
          value={desc}
        ></textarea>
        <button className="w-full p-2 bg-white">ADD Tasks</button>
      </form>

      <ul className="w-[30%] m-auto mt-10 text-white">
        {tasks.map((task,idx)=>{
          return (
            <li key={idx} className="border border-white p-2 flex justify-between text-xl mt-2">
              <span className={task.status === 'complete'?"text-green-300":'text-red-300'}> {task.title} </span>
              <span><i className="ri-pencil-fill"></i>
              <i className="ri-close-fill"></i></span>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default App;
