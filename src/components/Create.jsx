import React, { useContext, useState } from 'react'
import { taskcontext } from '../context/TaskContext';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate()
    const [tasks,setTasks] = useContext(taskcontext)

    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("incomplete");
    const [desc, setDesc] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        setTasks([...tasks,{title,status,desc}])
        navigate('/show')
      }
  return (
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
   
  )
}

export default Create