import { Button } from 'primereact/button';
import { UserCircle } from "lucide-react";
export default function Navbar() {
    return (
        <nav className="border-b border-border">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-12">
                        <a href="#" className="text-foreground hover:text-primary transition-colors">
                            Home
                        </a>
                        <a href="#" className="text-foreground hover:text-primary transition-colors">
                            About us
                        </a>
                        <a href="#" className="text-foreground hover:text-primary transition-colors">
                            Services
                        </a>
                        <a href="#" className="text-foreground hover:text-primary transition-colors">
                            Contact
                        </a>
                        <a href="#" className="text-foreground hover:text-primary transition-colors">
                            Blog
                        </a>
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