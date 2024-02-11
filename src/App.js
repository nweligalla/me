import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Experience from "./components/Experience";


function App() {
  return (
    <h1>
      <Navbar />
      <Home />
      <About />
      <Experience/>
      <Education/>
      <Skills />
      <Work/>
      <Contact/>
    </h1>
  );
}

export default App;
