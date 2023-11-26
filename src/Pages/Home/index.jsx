import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import About from "../About";
import Projects from "../Projects";
import Experience from "../Experience";
import "./index.css";

const Home = () => {
  // Example of managing the current page state
  const [currentPage, setCurrentPage] = useState('/');

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <Router>
      <div className="grid">
        <header>
          <h1><Link to="/">TOM WARDEN</Link></h1>
          <nav>
            {/* onClick triggers the state change */}
            <Link to="/about" className='nav' onClick={() => handleNavClick('/about')}>ABOUT</Link>
            <Link to="/experience" className='nav' onClick={() => handleNavClick('/experience')}>EXPERIENCE</Link>
            <Link to="/projects" className='nav' onClick={() => handleNavClick('/projects')}>PROJECTS</Link>
            <span className="socials"> <img src="src/Pages/Home/assets/github.svg" width={30} /></span>
            <span className="socials"> <img src="src/Pages/Home/assets/linkedin.svg" width={30} /></span>
          </nav>
        </header>

        {/* Conditional rendering based on the currentPage state */}
        {currentPage === '/' ? (
          <article>
            <h3 className="tagline">Empowering Business Efficiency Through Innovative Code: Crafting Apps to Enhance Your Company's Potential</h3>
            <img className="home-image" src="src/Pages/Home/assets/home-image.jpg" alt="Home" width={900} height={700} />
          </article>
        ) : null}

        {/* Conditionally render About, Experience, and Projects based on the currentPage state */}
        {currentPage === '/about' ? <About /> : null}
        {currentPage === '/experience' ? <Experience /> : null}
        {currentPage === '/projects' ? <Projects /> : null}

        {/* Routes for About, Experience, and Projects */}
        <main className='routing'>
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>

        <footer>
          <h2>TOM WARDEN</h2>
          <p>tomlukeprogramming@outlook.com</p>
          <div>
            <span className="socials"> <img src="src/Pages/Home/assets/github.svg" width={30} /></span>
            <span className="socials"> <img src="src/Pages/Home/assets/linkedin.svg" width={30} /></span>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default Home;
