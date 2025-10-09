import { Outlet } from "react-router-dom";

import Navbar from './components/Navbar';
import { SocialMedia } from './components/HeroSection/SocialMedia';
import { Footer } from "./components/Footer";

export const Layout = () => {
    return (
        <>
            <div className="min-h-screen  bg-background text-foreground">
                <Navbar />
                <div className="relative z-0 bg-black text-yellow-400 min-h-[80vh] flex items-center justify-center">
                    <SocialMedia />
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    )
}