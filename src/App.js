import React from "react";
import {BrowserRouter as Router, Switch, Route, HashRouter} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

// Components
import NavBar from './components/Navbar';
import Footer from "./components/Footer";
import HomePage from "./components/Home/Home";
import Project from "./components/Project/Project";
import Whoami from "./components/Whoami/Whoami";

function App() {
    return (
        <HashRouter>
            <NavBar/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/projects" component={Project}/>
                    <Route exact path="/whoami" component={Whoami}/>
                </Switch>
            <Footer/>
        </HashRouter>
    );
}

export default App;
