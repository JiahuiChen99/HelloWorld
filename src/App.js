import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

// Components
import NavBar from './components/Navbar';
import Footer from "./components/Footer";
import HomePage from "./components/Home/Home";
import Project from "./components/Project/Project";

function App() {
    return (
        <Router>
            <NavBar/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/projects" component={Project}/>
                </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
