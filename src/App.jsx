import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider, UserContext } from './context/UserContext';
import { useContext } from 'react';

import { HeroSection } from "./components/HeroSection";
import { Layout } from './Layout';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { ReadBlogPost } from './pages/ReadBlogPost';
import { Projects } from './pages/User/Projects';
import { AuthProvider } from '../../../../Users/Erang/OneDrive/Desktop/FullStack Programs/Setups/project-root/client/src/context/AuthContext';




function App() {

  return (
    <UserProvider>
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
              <Route path="/Landing-Page-Scratch/user/projects" element={<Projects />} />
              <Route path="/Landing-Page-Scratch/signup" element={<SignUp />} />
            </Route>
            <Route path="*" element={<h1 className='text-3xl font-bold text-yellow-400 flex items-center justify-center h-screen'>404 - Page Not Found</h1>} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  )
}

export default App
