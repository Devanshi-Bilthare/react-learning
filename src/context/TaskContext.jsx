import React, { createContext, useState } from 'react'

export const taskcontext = createContext(null)

const TaskContext = (props) => {
    const [tasks,setTasks] = useState([])
  return (
    <taskcontext.Provider value={[tasks,setTasks]}>{props.children}</taskcontext.Provider>
  )
}

export default TaskContext