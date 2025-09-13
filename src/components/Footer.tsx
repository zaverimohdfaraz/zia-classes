import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-6">
            <Link to="/" className="hover:text-primary-foreground/80 transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-primary-foreground/80 transition-colors">
              About
            </Link>
            <Link to="/courses" className="hover:text-primary-foreground/80 transition-colors">
              Courses
            </Link>
            <Link to="/why-choose-us" className="hover:text-primary-foreground/80 transition-colors">
              Why Choose Us
            </Link>
            <Link to="/testimonials" className="hover:text-primary-foreground/80 transition-colors">
              Testimonials
            </Link>
            <Link to="/gallery" className="hover:text-primary-foreground/80 transition-colors">
              Gallery
            </Link>
            <Link to="/contact" className="hover:text-primary-foreground/80 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Copyright and Credits */}
          <div className="text-center md:text-right text-sm">
            <p className="mb-1">© All rights reserved Zia Classes</p>
            <p className="text-primary-foreground/70">
  Developed by{" "}
  <a 
    href="https://myresume-coral-five.vercel.app/my-resume"  
    target="_blank" 
    rel="noopener noreferrer"
    className="font-bold hover:underline text-primary-foreground"
  >
    Faraz Junaid Zaveri
  </a>
</p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;