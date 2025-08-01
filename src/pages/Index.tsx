import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SupportOptions from "@/components/SupportOptions";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SupportOptions />
      <FAQ />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
