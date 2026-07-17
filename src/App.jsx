import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './Sections/Hero/Hero';
import About from './Sections/About/About';
import Experince from './Sections/Experience/Experience';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <Hero />
        <About />
        <Experince />
      </main>

      <Footer />
    </div>
  );
}

export default App;
