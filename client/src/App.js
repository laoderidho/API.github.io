import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/Screen/Home"
import About from './components/Screen/About'

const App = ()=>{

  return(
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;