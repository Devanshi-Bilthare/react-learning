import React, { useState } from "react";
import Show from "./components/Show";
import Create from "./components/Create";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Update from "./components/Update";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div>
      <div className="w-full min-h-screen bg-stone-800 p-2">
        <Nav/>
       
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/show' element={<Show/>}>
            <Route path="/show/:idx" element={<Update/>}/>
          </Route>
          
        </Routes>
      </div>
    </div>
  );
};

export default App;
