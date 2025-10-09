
import Navbar from './components/Navbar';
import { HeroSection } from "./components/HeroSection";
import { Footer } from "./components/Footer";

function App() {

  return (
    <div className="min-h-screen  bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default App
