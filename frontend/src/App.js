import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import VidioHome from "./components/vidioHome";
import FileHome from "./components/fileHome";


import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/amateurs" element={<VidioHome />} />
          <Route path="/search" element={<FileHome />} />
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
