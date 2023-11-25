import About from "../About";
import Projects from "../Projects";
import Experience from "../Experience";

import "./index.css";

const Home = () => {
  return (
    <>
      <div className="grid">
        <header>
          <h1>Hi, I'm Tom</h1>

          <p>Passionate about pretty websites and even prettier code!</p>
        </header>

        <main>
          <nav>
            <button>
              About Me
              <About />
            </button>
            <button>
              Experience
              <Experience />
            </button>
            <button>
              Projects
              <Projects />
            </button>
          </nav>
        </main>



        <footer>
          <span className="socials">git hub</span>
          <span className="socials">instagram</span>
          <span className="socials">linkeden</span>
        </footer>
      </div>
    </>
  );
};

export default Home;
