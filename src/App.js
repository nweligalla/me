import About from "./components/About";
import Articles from "./components/Articles";
import Education from "./components/Education";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";


function App() {
  return (
    <h1>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects/>
      <Articles />
      <Footer/>
    </h1>
  );
}

export default App;
