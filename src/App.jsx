import './index.css'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import Experiences from './components/experiences/Experiences'
import Contact from './components/contact/Contact'
import Roadmap from './components/roadmap/Roadmap'
import { useEffect } from 'react';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="pt-10">
          <DynamicBackground>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/experiences" element={<Experiences />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </DynamicBackground>
        </div>
      </Router>
    </div>
  );
}

function DynamicBackground({ children }) {
  const location = useLocation();

  useEffect(() => {
    let gradientBackground;

    switch (location.pathname) {
      case '/':
        gradientBackground = 'linear-gradient(135deg, #10151a, #253544, #1c2833, #0d1414)'; // Couleur du fond pour Home
        break;
      case '/roadmap':
        gradientBackground = 'linear-gradient(135deg, #10151a, #253544, #1c2833, #0d1414)';
        // gradientBackground = 'linear-gradient(90deg, #020024 0%, #090979 35%, #5900ff 100%)';
        break;
      case '/experiences':
        gradientBackground = 'linear-gradient(135deg, #1b1d1f, #2c3035, #3a4048, #444f57)'; // Couleur pour Experiences
        break;
      case '/contact':
        gradientBackground = 'linear-gradient(135deg, #212121, #333333, #424242, #525252)'; // Couleur pour Contact
        break;
      default:
        gradientBackground = 'linear-gradient(135deg, #10151a, #253544, #1c2833, #0d1414)'; // Couleur par défaut
    }

    document.body.style.setProperty('--background-gradient', gradientBackground);
  }, [location]);

  return <>{children}</>;
}

export default App;