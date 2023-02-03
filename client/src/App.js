import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Sidebar from "./components/components/Sidebar";

const App = ()=>{

  return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Sidebar/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;