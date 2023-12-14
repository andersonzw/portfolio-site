
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects';
import "./utils/_theme.module.scss"
import "./App.scss"

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Experience/>
    </div>
  );
}

export default App;
