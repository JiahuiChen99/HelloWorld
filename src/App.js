import './App.css';
import React from "react";
import {BrowserRouter} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import NavBar from './components/Navbar';
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
