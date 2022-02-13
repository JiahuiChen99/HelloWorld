import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Routes, Route } from "react-router-dom";

// Components
import NavBar from './components/Navbar';
import Footer from "./components/Footer";
import HomePage from "./components/Home/Home";
import Project from "./components/Project/Project";
import Whoami from "./components/Whoami/Whoami";

function App() {
    return (
        <div>
            <NavBar/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/projects" element={<Project/>}/>
                    <Route path="/whoami" element={<Whoami/>}/>
                </Routes>
            <Footer/>
        </div>
    );
}

export default App;
