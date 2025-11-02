import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Goodreads Reviewer",
    text: "A breathtaking journey through realms of magic and romance. Lucy Wren has created a world so vivid, I never wanted to leave. The characters stayed with me long after I turned the last page.",
    rating: 5,
  },
  {
    id: 2,
    name: "James Patterson",
    role: "Book Blogger",
    text: "Absolutely spellbinding! The perfect blend of fantasy and romance with twists that kept me reading until dawn. This trilogy has earned its place among my all-time favorites.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-navy-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gold mb-4">Reader Reviews</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-sapphire to-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-card p-8 rounded-lg border border-primary/20 hover:border-primary/40 transition-smooth"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-lg text-foreground/90 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-primary/20 pt-4">
                <p className="font-semibold text-gold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
