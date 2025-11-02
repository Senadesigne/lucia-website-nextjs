'use client'

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <video 
        src="/herovideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="flex flex-col items-center">
          {/* Author Name */}
          <h1 className="text-7xl md:text-9xl font-bold text-gold text-center mb-16 tracking-wide">
            Lucy Wren
          </h1>
          
          {/* Book and Description */}
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl w-full">
            {/* Left: Description */}
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="text-3xl font-bold text-sapphire">Dragonfly in Sapphire</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A mesmerizing tale of magic, romance, and destiny where ancient powers awaken 
                and forbidden love defies the boundaries between worlds.
              </p>
              <Link href="/about">
                <Button variant="gold" size="lg" className="mt-4">
                  Learn More
                </Button>
              </Link>
              
              {/* Retailer Links */}
              <div className="pt-6 border-t border-primary/20">
                <p className="text-sm text-muted-foreground mb-3">Available at:</p>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="text-sm text-primary hover:text-gold transition-smooth">Amazon</a>
                  <a href="#" className="text-sm text-primary hover:text-gold transition-smooth">Bookshop</a>
                  <a href="#" className="text-sm text-primary hover:text-gold transition-smooth">UK Editions</a>
                  <a href="#" className="text-sm text-primary hover:text-gold transition-smooth">Barnes & Noble</a>
                  <a href="#" className="text-sm text-primary hover:text-gold transition-smooth">Books-A-Million</a>
                </div>
              </div>
            </div>
            
            {/* Right: Book Cover */}
            <div className="order-1 md:order-2 flex justify-center">
              <Image 
                src="/knjiga-background.png" 
                alt="Dragonfly in Sapphire Book Cover" 
                width={280}
                height={420}
                className="w-full max-w-[280px] md:max-w-sm rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
