import { Facebook, Instagram, Music } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-deep border-t border-primary/20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <h3 className="text-2xl font-bold text-gold">Lucy Wren</h3>
          
          <div className="flex gap-6">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-smooth"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-smooth"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-smooth"
              aria-label="TikTok"
            >
              <Music className="w-6 h-6" />
            </a>
          </div>
          
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lucy Wren. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
