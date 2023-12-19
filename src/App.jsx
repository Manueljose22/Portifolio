import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import NavBar from './components/layouts/NavBar';
import Footer from './components/layouts/Footer';
import About from './pages/About';
import Skills from './Pages/Skills';
import Projects from './pages/Projects';
import Home from './pages/Home';

export default function App(){

    return(
    
        <Router>
            <NavBar />
            <Routes>
                <Route path='/Portifolio/home' element={<Home />} />
                <Route path='/Portifolio/about' element={<About />} />
                <Route path='/Portifolio/skills' element={<Skills />} />
                <Route path='/Portifolio/projects' element={<Projects />} />
            </Routes>
            
            <Footer />
        </Router>
    )
}
