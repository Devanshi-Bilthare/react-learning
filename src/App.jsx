import React, { useState } from "react";
import Show from "./components/Show";
import Create from "./components/Create";

const App = () => {
  return (
    <div>
      <div className="w-full min-h-screen bg-stone-800 p-2">
      <Create /> 
      <Show />
  </div>
    </div>
  );
};

export default App;
