import { Button } from 'primereact/button';
import { UserCircle } from "lucide-react";
export default function Navbar() {
    const navlinks = [
        { name: 'Home', href: '#' },
        { name: 'About us', href: '#' },
        { name: 'Services', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Blog', href: '#' },
    ]
    return (
        <nav className={`border-b border-b-yellow-400 bg-black text-yellow-400 z-100`} >
            <div className="container mx-auto px-6 py-8">
                <div className="flex items-center justify-around">
                    <div className="flex items-center space-x-12">
                        {
                            navlinks.map((link) => (
                                <a key={link.name} href={link.href} className="text-foreground hover:text-primary transition-colors">
                                    {link.name}
                                </a>
                            ))
                        }
                    </div>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8">
                        <UserCircle className="mr-2 h-5 w-5" />
                        Sign up | Log in
                    </Button>
                </div>
            </div>
        </nav>
    )
}