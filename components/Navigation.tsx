import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-gold transition-smooth hover:text-gold/80">
          Lucy Wren
        </Link>
        <div className="flex gap-6 items-center">
          <Link href="/about">
            <Button variant="link" className="text-foreground hover:text-gold">
              About
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="link" className="text-foreground hover:text-gold">
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
