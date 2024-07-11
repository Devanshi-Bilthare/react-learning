import React, { useContext } from 'react'
import { taskcontext } from '../context/TaskContext'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const navigate = useNavigate()
    const [tasks,setTasks] = useContext(taskcontext)
    const {idx} = useParams()
    console.log(tasks[idx])
  return (
    <>
        <h1 className='text-center text-xl text-white'>Update</h1>
        <button onClick={() => navigate(-1)}>Back</button>
    </>
  )
}

export default Update