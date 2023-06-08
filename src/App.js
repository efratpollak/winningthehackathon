import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import VidioHome from "./components/vidioHome";

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VidioHome />} />
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
