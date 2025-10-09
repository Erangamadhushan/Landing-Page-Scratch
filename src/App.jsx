import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { HeroSection } from "./components/HeroSection";
import { Footer } from "./components/Footer";

import { Layout } from './Layout';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';

function App() {

  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/Landing-Page-Scratch" element={<Layout />} >
            <Route index element={<HeroSection />} />
            <Route path="/Landing-Page-Scratch/about" element={<About />} />
            <Route path="/Landing-Page-Scratch/services" element={<Services />} />
            <Route path="/Landing-Page-Scratch/contact" element={<Contact />} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
