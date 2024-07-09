import React, { useContext } from 'react'
import { taskcontext } from '../context/TaskContext'

const Show = () => {
  const[tasks,setTasks] = useContext(taskcontext)
  return (
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
  )
}

export default Show