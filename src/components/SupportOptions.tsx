import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, FileText, Video, Users, Headphones } from "lucide-react";

// Extend the Window interface to include jivo_api
declare global {
  interface Window {
    jivo_api?: {
      open: () => void;
    };
  }
}

const SupportOptions = () => {
  const openJivoChat = () => {
    if (typeof window !== 'undefined' && window.jivo_api) {
      window.jivo_api.open();
    } else {
      // Fallback if Jivo isn't loaded yet
      console.log('Jivo chat is loading...');
      setTimeout(() => {
        if (window.jivo_api) {
          window.jivo_api.open();
        }
      }, 1000);
    }
  };

  const supportOptions = [
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant help from our support team. Available 24/7 for immediate assistance.",
      action: "Start Chat",
      gradient: "from-primary to-coinbase-blue-light",
      delay: "0ms",
      onClick: openJivoChat
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "Connect with our dedicated customer support team for personalized assistance.",
      action: "Contact Support",
      gradient: "from-coinbase-green to-emerald-400",
      delay: "100ms",
      onClick: openJivoChat
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message and get a comprehensive response within 24 hours.",
      action: "Send Email",
      gradient: "from-coinbase-yellow to-amber-400",
      delay: "200ms"
    },
    {
      icon: FileText,
      title: "Help Center",
      description: "Browse our comprehensive knowledge base with step-by-step guides.",
      action: "Browse Articles",
      gradient: "from-purple-500 to-purple-400",
      delay: "300ms"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Watch detailed video guides to learn how to use Coinbase Wallet features.",
      action: "Watch Videos",
      gradient: "from-pink-500 to-pink-400",
      delay: "400ms"
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with other users and get help from the Coinbase Wallet community.",
      action: "Join Forum",
      gradient: "from-indigo-500 to-indigo-400",
      delay: "500ms"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card" id="help">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How Can We Help You Today?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the support option that works best for you. Our team is ready to assist with any questions about your Coinbase Wallet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supportOptions.map((option, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-all duration-300 border-border/50 hover:border-primary/20 animate-fade-in"
              style={{ animationDelay: option.delay }}
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${option.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <option.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {option.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {option.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                  onClick={option.onClick}
                >
                  {option.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportOptions;