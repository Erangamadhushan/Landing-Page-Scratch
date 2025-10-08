import { ArrowRight } from "lucide-react";
import { Button } from 'primereact/button';
import main_img_1 from '../assets/main_img_1.jpg';
import main_img_2 from '../assets/main_img_2.jpg';

import Navbar from './components/Navbar';
import { HeroSection } from "./components/HeroSection";

function App() {

  return (
    <div className="min-h-screen  bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />
    </div>
  )
}

export default App
