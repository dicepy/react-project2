import React from "react";
import './styles/App.css'
import Posts from "./pages/Posts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/UI/Navbar/Navbar";


function App() {


  return (
    
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/posts" element={<Posts/>} />
        <Route path="*" element={<Posts/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
