import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Articles from './components/Articles';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <Experience/>
      <Education/>
      <Skills/>
      <Projects/>
      <Articles/>
      <Footer/>
    </div>
  );
}

export default App;
