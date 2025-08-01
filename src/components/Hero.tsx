import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, Shield, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero-support.jpg";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in">
                Coinbase Wallet
                <span className="block text-primary">Customer Support</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in">
                Get instant help with your Coinbase Wallet. Our expert support team is here 24/7 to assist you with any questions or issues you may have.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button size="lg" className="bg-gradient-hero hover:shadow-glow transition-all duration-300">
                <MessageSquare className="h-5 w-5 mr-2" />
                Start Live Chat
              </Button>
              <Button variant="outline" size="lg" className="hover:shadow-card transition-all duration-300">
                Browse Help Articles
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">24/7 Support</div>
                  <div className="text-sm text-muted-foreground">Always available</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-coinbase-green/10 rounded-lg">
                  <Shield className="h-5 w-5 text-coinbase-green" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Secure Help</div>
                  <div className="text-sm text-muted-foreground">Protected support</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-float">
            <img 
              src={heroImage} 
              alt="Coinbase Wallet Customer Support" 
              className="rounded-2xl shadow-glow w-full"
            />
            <div className="absolute -bottom-6 -right-6 p-4 bg-card border border-border rounded-xl shadow-card">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">Expert Team</div>
                  <div className="text-sm text-muted-foreground">Ready to help</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;