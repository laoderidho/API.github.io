import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/Screen/Home"
import About from './components/Screen/About'
import AddMahasiswa from "./components/components/AddMahasiswa";

const App = ()=>{

  return(
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>} />
                <Route path="/add" element={<AddMahasiswa/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;