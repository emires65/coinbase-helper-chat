import { Button } from "@/components/ui/button";
import { HelpCircle, Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-hero"></div>
            <span className="text-xl font-bold text-foreground">Coinbase Wallet Support</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#help" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Help Center
            </a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Contact Us
            </a>
            <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              FAQ
            </a>
          </nav>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Phone className="h-4 w-4 mr-2" />
              Call Support
            </Button>
            <Button variant="default" size="sm">
              <HelpCircle className="h-4 w-4 mr-2" />
              Get Help
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;