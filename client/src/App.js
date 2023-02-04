import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/Screen/Home"
import About from './components/Screen/About'
import Sidebar from "./components/components/Sidebar";

const App = ()=>{

  return(
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/about" element={<About/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;