import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './Sections/Hero/Hero';
import About from './Sections/About/About';
import Experince from './Sections/Experience/Experience';
import Projects from './Sections/Projects/Projects';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <Hero />
        <About />
        <Experince />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}

export default App;
