import React, { useState } from "react";
import Show from "./components/Show";
import Create from "./components/Create";


const App = () => {
  const [tasks,setTasks] = useState([])
  return (
    <div>
      <div className="w-full min-h-screen bg-stone-800 p-2">
      <Create tasks={tasks} setTasks={setTasks}/> 
      <Show tasks={tasks} setTasks={setTasks}/>
  </div>
    </div>
  );
};

export default App;
