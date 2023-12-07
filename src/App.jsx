import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import NavBar from './components/layouts/NavBar';
import Footer from './components/layouts/Footer';
import Home from './components/Home';
// import GlobalStyle from './components/layouts/Global';

export default function App(){

    return(
    
        <Router>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
            
            <Footer />
        </Router>
    )
}
