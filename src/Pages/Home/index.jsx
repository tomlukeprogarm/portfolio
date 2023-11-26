
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import About from '../About';
import Projects from '../Projects';
import Experience from '../Experience';
import './index.css';
import Socials from './components/Socials';

const Home = () => {
  const [currentPage, setCurrentPage] = useState('/');

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <Router>
      <div className="grid">
        <header>
        <Link to="/" onClick={() => handleNavClick('/')} className='header-name'>TOM WARDEN</Link>
          <nav>
            <Link to="/about" className="nav" onClick={() => handleNavClick('/about')}>ABOUT</Link>
            <Link to="/experience" className="nav" onClick={() => handleNavClick('/experience')}>EXPERIENCE</Link>
            <Link to="/projects" className="nav" onClick={() => handleNavClick('/projects')}>PROJECTS</Link>
            <Socials />
          </nav>
        </header>

        {/* Conditional rendering based on the currentPage state */}
        {currentPage === '/' ? (
          <article>
            <h3 className="tagline">Empowering Business Efficiency Through Innovative Code: Crafting Apps to Enhance Your Potential</h3>
            <img className="home-image" src="src/Pages/Home/assets/home-image.jpg" alt="Home" width={900} height={700} />
          </article>
        ) : null}

        {/* Conditionally render About, Experience, and Projects based on the currentPage state */}
        {currentPage === '/about' ? <About /> : null}
        {currentPage === '/experience' ? <Experience /> : null}
        {currentPage === '/projects' ? <Projects /> : null}

        <footer>
          <h2>TOM WARDEN</h2>
          <p>tomlukeprogramming@outlook.com</p>
          <div>
            <Socials />
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default Home;
