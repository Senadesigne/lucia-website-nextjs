"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-card p-8 rounded-lg border border-primary/20">
      <h2 className="text-3xl font-bold text-sapphire mb-6">Send a Message</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
            Name
          </label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="bg-input border-primary/30 focus:border-primary"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
            Email
          </label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="bg-input border-primary/30 focus:border-primary"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
            Message
          </label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            rows={6}
            className="bg-input border-primary/30 focus:border-primary resize-none"
          />
        </div>
        
        <Button type="submit" variant="gold" size="lg" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  );
};

