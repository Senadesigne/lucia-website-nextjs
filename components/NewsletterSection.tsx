'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you! Check your email for the first chapter.");
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-navy-deep via-background to-navy-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sapphire/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-5xl font-bold text-gold mb-4">Join the Journey</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-sapphire to-primary mx-auto rounded-full mb-6" />
          
          <p className="text-xl text-foreground/90 leading-relaxed">
            Subscribe to the newsletter and receive the <span className="text-sapphire font-semibold">first chapter</span> of 
            Dragonfly in Sapphire absolutely free!
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-6">
            <Input 
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-input border-primary/30 focus:border-primary text-foreground placeholder:text-muted-foreground"
            />
            <Button type="submit" variant="gold" size="lg" className="sm:w-auto">
              Get Free Chapter
            </Button>
          </form>
          
          <p className="text-sm text-muted-foreground pt-4">
            No spam, just magical updates and exclusive content.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
