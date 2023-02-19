import React from "react";
import "./App.css";
import Register from "./pages/Resgister";
import Login from "./pages/Login";
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import ZoomPage from "./pages/ZoomPage";
import CoursePage from "./pages/CoursePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/zoom" element={<ZoomPage />} />
          <Route path="/bijumpcourse" element={<CoursePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
