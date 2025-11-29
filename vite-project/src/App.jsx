import { useState } from "react";

import "./App.css";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        
        <Routes>
      
        <Route path="/" element={      <Home />}/>
    

          <Route path="/About" element={<About />}/>
          </Routes>
      </BrowserRouter>
  
    </>
  );
}

export default App;
