import About from "../About";
import Projects from "../Projects";
import Experience from "../Experience";
import './index.css'


const Home = () => {
  return (
    <>
      <header>
        <h1>Hi, I'm Tom</h1>

        <p>Passionate about pretty websites and even prettier code!</p>

      </header>

      <main>
        <button><About /></button>
        <button><Experience /></button>
        <button><Projects /></button>
      </main>

      <footer>

      </footer>
    </>
  );
};

export default Home;
