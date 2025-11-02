import Image from "next/image";

const AboutAuthorSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: About Text */}
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-gold mb-4">About the Author</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-sapphire to-primary rounded-full mb-6" />
              
              <p className="text-lg text-foreground/90 leading-relaxed">
                Lucy Wren is an internationally acclaimed author of fantasy romance, 
                known for weaving intricate worlds where magic and emotion collide. 
                With a background in mythology and folklore, she brings ancient legends 
                to life through her captivating storytelling.
              </p>
              
              <p className="text-lg text-foreground/90 leading-relaxed">
                Her debut trilogy has enchanted readers worldwide, earning critical acclaim 
                for its rich character development and immersive world-building. When she's 
                not writing, Lucy can be found exploring ancient ruins, studying rare manuscripts, 
                or dreaming up her next magical adventure.
              </p>
              
              <p className="text-lg text-foreground/90 leading-relaxed">
                She currently resides in a cottage surrounded by forests, where the whispers 
                of nature inspire every page she writes.
              </p>
            </div>
            
            {/* Right: Author Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-sapphire to-primary rounded-lg opacity-20 blur-2xl" />
              <div className="relative w-full h-[500px]">
                <Image 
                  src="/author-image.jpg" 
                  alt="Lucy Wren" 
                  fill
                  className="object-contain rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthorSection;
