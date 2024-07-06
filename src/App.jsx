import React, { useState } from "react";

const App = () => {
  const [taskName,setTaskName] =useState("")
  const [taskDesc,setTaskDesc] = useState("")
  const [taskStatus,setTaskStatus] = useState("")
  const [tasks,setTasks] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks,{taskName,taskDesc,taskStatus}])
    setTaskName("")
    setTaskDesc("")
    setTaskStatus("")
  }
  console.log(tasks)

  return (
    <div className="bg-stone-900 w-full min-h-screen p-2">
      <h1 className="text-center text-2xl mt-10 text-white">TO DO List</h1>
      <form onSubmit={submitHandler} className="w-[80%] bg-white m-auto mt-10 rounded-[10px]">
        <input
          type="text"
          placeholder="Task Name"
          onChange={(e) => setTaskName(e.target.value)}
          value={taskName}
          className="w-[30%] p-2 text-xl rounded-[20px]"
        />
         <input
          type="text"
          placeholder="Task Description"
          onChange={(e) => setTaskDesc(e.target.value)}
          value={taskDesc}
          className="w-[30%] p-2 text-xl rounded-[20px]"
        />
        <input
          type="text"
          placeholder="Task Status"
          onChange={(e) => setTaskStatus(e.target.value)}
          value={taskStatus}
          className="w-[30%] p-2 text-xl rounded-[20px]"
        />

        <button className="w-[10%] p-2 text-xl rounded-[20px] ">ADD Task</button>
      </form>

      <div className="w-[80%] m-auto mt-10 rounded-[10px]">
        {tasks.map((task,idx)=>(
         <div className="flex justify-between w-full bg-white p-2 px-5 text-xl mt-10 rounded-[10px]">
            <li className=" list-none">
              {task.taskName} : {task.taskDesc}
            </li>
            <li className="list-none">{task.taskStatus}</li>
         </div>
        ))}
      </div>
    </div>
  );
};

export default App;
