import { Metadata } from "next";
import { Mail, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt | Lucy Wren",
  description: "Pošaljite mi poruku ili me kontaktirajte putem emaila.",
};

const Contact = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-6xl md:text-7xl font-bold text-gold mb-6">Get in Touch</h1>
              <div className="h-1 w-24 bg-gradient-to-r from-sapphire to-primary mx-auto rounded-full mb-6" />
              <p className="text-xl text-foreground/80">
                Have a question or just want to say hello? I&apos;d love to hear from you!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Contact Form */}
              <ContactForm />

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-card p-8 rounded-lg border border-primary/20">
                  <div className="flex items-start gap-4 mb-4">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-sapphire mb-2">Email</h3>
                      <p className="text-foreground/80">hello@lucywren.com</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        For general inquiries and fan mail
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card p-8 rounded-lg border border-primary/20">
                  <div className="flex items-start gap-4 mb-4">
                    <MessageCircle className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-sapphire mb-2">Business Inquiries</h3>
                      <p className="text-foreground/80">agent@lucywren.com</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        For media, events, and collaboration requests
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-navy-light/50 p-8 rounded-lg border border-primary/20">
                  <h3 className="text-xl font-bold text-gold mb-4">Response Time</h3>
                  <p className="text-foreground/80">
                    I personally read every message and aim to respond within 3-5 business days. 
                    Thank you for your patience!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
