import { Button } from "@/components/ui/button";
import { Mail, Twitter, Github, Shield, Clock, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-coinbase-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-hero"></div>
              <span className="text-xl font-bold">Coinbase Wallet Support</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for Coinbase Wallet support. Get help when you need it, 24/7.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li><a href="#help" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Video Tutorials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Community Forum</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Security Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Getting Started</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Troubleshooting</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Best Practices</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">API Documentation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-coinbase-blue-light" />
                <div>
                  <div className="font-medium">24/7 Support</div>
                  <div className="text-sm text-gray-300">Always here to help</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MessageSquare className="h-5 w-5 text-coinbase-green" />
                <div>
                  <div className="font-medium">Live Chat</div>
                  <div className="text-sm text-gray-300">Instant assistance</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-coinbase-yellow" />
                <div>
                  <div className="font-medium">Secure Support</div>
                  <div className="text-sm text-gray-300">Your data is safe</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Coinbase Wallet Support. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;