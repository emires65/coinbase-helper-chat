import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, X, MessageCircle } from "lucide-react";

// Extend the Window interface to include jivo_api
declare global {
  interface Window {
    jivo_api?: {
      open: () => void;
    };
  }
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openJivoChat = () => {
    // This will trigger the Jivo chat widget
    if (typeof window !== 'undefined' && window.jivo_api) {
      window.jivo_api.open();
      setIsOpen(false); // Close our widget when Jivo opens
    } else {
      // Fallback if Jivo isn't loaded yet
      console.log('Jivo chat is loading...');
      setTimeout(() => {
        if (window.jivo_api) {
          window.jivo_api.open();
          setIsOpen(false);
        }
      }, 1000);
    }
  };

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="h-14 w-14 rounded-full bg-gradient-hero hover:shadow-glow transition-all duration-300 animate-float"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Widget Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 animate-fade-in">
          <Card className="shadow-glow border-primary/20">
            <CardHeader className="bg-gradient-hero text-primary-foreground rounded-t-lg">
              <CardTitle className="text-lg">Coinbase Wallet Support</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Get instant help with live chat
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <Button 
                  onClick={openJivoChat}
                  className="w-full bg-gradient-hero hover:shadow-glow transition-all duration-300"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Start Live Chat
                </Button>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Chat with our support team in real-time
                  </p>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground text-center">
                  Available 24/7 for immediate assistance
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatWidget;