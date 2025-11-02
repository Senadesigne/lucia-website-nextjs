import { Metadata } from "next";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "O meni | Lucy Wren",
  description: "Saznajte više o Lucy Wren, autoru fantasy romana i strasti prema pričama.",
};

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/placeholder.svg"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <h1 className="text-6xl md:text-7xl font-bold text-gold mb-6">About Lucy Wren</h1>
              <div className="h-1 w-24 bg-gradient-to-r from-sapphire to-primary mx-auto rounded-full" />
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold text-sapphire">The Journey Begins</h2>
                  
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    Lucy Wren discovered her passion for storytelling at the age of seven, 
                    when she wrote her first tale about a magical forest filled with talking 
                    creatures. That childhood wonder never faded, evolving instead into a 
                    lifelong dedication to crafting immersive fantasy worlds.
                  </p>
                  
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    After studying Classical Literature and Mythology at Oxford University, 
                    Lucy spent years traveling across Europe, exploring ancient sites and 
                    collecting folklore that would later inspire her writing.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-sapphire to-primary rounded-lg opacity-20 blur-2xl" />
                  <div className="relative w-full aspect-square">
                    <Image 
                      src="/author-image.jpg" 
                      alt="Lucy Wren" 
                      fill
                      className="rounded-lg shadow-2xl object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-8 mb-16">
                <h2 className="text-4xl font-bold text-gold text-center">Writing Philosophy</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-sapphire to-primary mx-auto rounded-full mb-8" />
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-card p-6 rounded-lg border border-primary/20">
                    <h3 className="text-xl font-bold text-sapphire mb-3">Magic in the Mundane</h3>
                    <p className="text-foreground/80">
                      Every story should reveal the extraordinary hiding within ordinary moments, 
                      transforming the familiar into something wondrous.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-primary/20">
                    <h3 className="text-xl font-bold text-sapphire mb-3">Characters First</h3>
                    <p className="text-foreground/80">
                      The most compelling fantasy worlds are built through the eyes of characters 
                      who feel real, flawed, and deeply human.
                    </p>
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg border border-primary/20">
                    <h3 className="text-xl font-bold text-sapphire mb-3">Romance & Power</h3>
                    <p className="text-foreground/80">
                      Love is the most powerful magic of all, capable of reshaping destinies 
                      and defying the oldest of prophecies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-navy-light/50 p-12 rounded-lg border border-primary/20">
                <h2 className="text-4xl font-bold text-gold text-center mb-8">Awards & Recognition</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-sapphire to-primary mx-auto rounded-full mb-12" />
                
                <div className="space-y-4 max-w-3xl mx-auto">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <p className="text-lg text-foreground/90">
                      Top Book Editor on Fiverr
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <p className="text-lg text-foreground/90">
                      Copywriter for 12 Published Books
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <p className="text-lg text-foreground/90">
                      Author of 4 Books
                    </p>
                  </div>
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

export default About;
