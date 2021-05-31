import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

// Components
import NavBar from './components/Navbar';
import Footer from "./components/Footer";
import HomePage from "./components/Home/Home";

function App() {
    return (
        <Router>
            <NavBar/>
                <Switch>
                    <Route path="/" component={HomePage}/>
                </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
