import React, { useContext } from 'react'
import { taskcontext } from '../context/TaskContext'
import { Link, Outlet, useLocation } from 'react-router-dom'

const Show = () => {
  const location = useLocation()
  const[tasks,setTasks] = useContext(taskcontext)

  const deleteHandler = (idx) =>{
    const copyTasks = [...tasks]
    copyTasks.splice(idx,1)
    setTasks(copyTasks)
  }

  let renderTasks = <h1>...Loading</h1>
  if(tasks.length > -0){
    renderTasks = tasks.map((task,idx)=>{
      return (
        <li key={idx} className="border border-white p-2 flex justify-between text-xl mt-2">
          <span className={task.status === 'complete'?"text-green-300":'text-red-300'}> {task.title} </span>
          <span><Link to={`${location.pathname}/${idx}`}><i className="ri-pencil-fill"></i></Link>
          <i className="ri-close-fill" onClick={() => deleteHandler(idx)}></i></span>
        </li>
        
      )
    })
  }


  return (
   <>
     <ul className="w-[30%] m-auto mt-10 text-white">
    {renderTasks}
</ul>
<Outlet/>
   </>
  )
}

export default Show