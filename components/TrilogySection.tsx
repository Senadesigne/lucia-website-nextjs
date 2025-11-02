import Image from "next/image";
import { Button } from "@/components/ui/button";

const books = [
  {
    id: 1,
    title: "Dragonfly in Sapphire",
    cover: "/knjiga-background.png",
    description: "Where magic awakens and destinies intertwine.",
  },
  {
    id: 2,
    title: "Wings of Amber",
    cover: "/knjiga-background.png",
    description: "Ancient secrets unfold and loyalties are tested.",
  },
  {
    id: 3,
    title: "Crown of Starlight",
    cover: "/knjiga-background.png",
    description: "Love and power collide in a battle for the ages.",
  },
];

const TrilogySection = () => {
  return (
    <section className="py-24 bg-navy-light/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gold mb-4">The Trilogy</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-sapphire to-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {books.map((book) => (
            <div 
              key={book.id}
              className="group bg-card rounded-lg overflow-hidden border border-primary/20 hover:border-primary/40 transition-smooth"
            >
              <div className="relative overflow-hidden h-96 md:h-64 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-smooth z-10" />
                <Image 
                  src={book.cover} 
                  alt={book.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-smooth duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-sapphire">{book.title}</h3>
                <p className="text-muted-foreground">{book.description}</p>
                <Button variant="outline" className="w-full mt-4">
                  Order Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrilogySection;
