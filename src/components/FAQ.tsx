import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I reset my Coinbase Wallet password?",
      answer: "You can reset your password by going to the login screen and clicking 'Forgot Password'. Follow the instructions sent to your email to create a new password."
    },
    {
      question: "Why is my transaction taking so long to confirm?",
      answer: "Transaction times depend on network congestion and gas fees. During busy periods, transactions may take longer. You can check the status on the blockchain explorer using your transaction hash."
    },
    {
      question: "How do I add custom tokens to my wallet?",
      answer: "Go to your wallet, tap the '+' button, select 'Add Custom Token', and enter the token contract address. Make sure you're on the correct network for the token you're adding."
    },
    {
      question: "What should I do if I can't access my wallet?",
      answer: "First, make sure you have your recovery phrase. If you can't access your wallet, you can restore it using your 12-word recovery phrase. Contact support if you need additional assistance."
    },
    {
      question: "How do I connect my wallet to a DeFi application?",
      answer: "Open the DeFi app in your Coinbase Wallet browser, or scan the QR code if using desktop. When prompted, approve the connection request and review any permissions being requested."
    },
    {
      question: "Are there fees for using Coinbase Wallet?",
      answer: "Coinbase Wallet is free to download and use. You'll only pay network fees (gas fees) when making transactions on the blockchain. These fees go to network validators, not Coinbase."
    },
    {
      question: "How do I backup my wallet?",
      answer: "Go to Settings > Recovery Phrase and write down your 12-word recovery phrase. Store it securely offline. Never share this phrase with anyone or store it digitally."
    },
    {
      question: "Can I use Coinbase Wallet without a Coinbase account?",
      answer: "Yes! Coinbase Wallet is a self-custody wallet that works independently. You don't need a Coinbase account to use it, though you can connect them for additional features."
    }
  ];

  return (
    <section className="py-20" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find quick answers to common questions about Coinbase Wallet
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 hover:shadow-card transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;