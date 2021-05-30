import './App.css';
import NavBar from './components/Navbar';
import {BrowserRouter} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <BrowserRouter>
            <NavBar></NavBar>
        </BrowserRouter>
    );
}

export default App;
