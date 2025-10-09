import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeroSection } from "./components/HeroSection";

import { Layout } from './Layout';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { ReadBlogPost } from './pages/ReadBlogPost';

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
            <Route path="/Landing-Page-Scratch/blog" element={<Blog />} />
            <Route path="/Landing-Page-Scratch/blog/:post" element={<ReadBlogPost />} />
            <Route path="/Landing-Page-Scratch/signin" element={<SignIn />} />
            <Route path="/Landing-Page-Scratch/signup" element={<SignUp />} />
          </Route>
          <Route path="*" element={<h1 className='text-3xl font-bold text-yellow-400 flex items-center justify-center h-screen'>404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
