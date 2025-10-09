import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

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




function App() {

  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<HeroSection />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:post" element={<ReadBlogPost />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/user/projects" element={<Projects />} />
              <Route path="/signup" element={<SignUp />} />
            </Route>
            <Route path="*" element={<h1 className='text-3xl font-bold text-yellow-400 flex items-center justify-center h-screen'>404 - Page Not Found</h1>} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  )
}

export default App
