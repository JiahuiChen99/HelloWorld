import './App.css';
import React from "react";
import {BrowserRouter} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import NavBar from './components/Navbar';

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
        </BrowserRouter>
    );
}

export default App;
