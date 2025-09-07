import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/courses', label: 'Courses' },
    { href: '/why-choose-us', label: 'Why Choose Us' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  const contactInfo = {
    phone: '9930308817',
    email: 'ziaclasses2012@gmail.com',
    instagram: 'zia.classes'
  };

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
         {/* Logo */}
<Link to="/" className="flex items-center space-x-3">
  {/* Logo Image */}
  <img
    src="/images/logo.jpg" // <-- put your logo in public/images/logo.png
    alt="Zia Classes Logo"
    className="h-10 w-auto md:h-12 lg:h-14 object-contain"
  />

  {/* Text beside logo (optional, can hide on small screens) */}
  <div className="hidden sm:block">
    <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-primary">Zia Classes</h1>
    <p className="text-xs md:text-sm text-muted-foreground">Since 2012</p>
  </div>
</Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  location.pathname === item.href
                    ? "text-primary bg-primary-light"
                    : "text-foreground hover:text-primary hover:bg-muted"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contact Actions */}
          <div className="hidden lg:flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open(`tel:${contactInfo.phone}`)}
              className="text-trust hover:text-trust-foreground hover:bg-trust/10"
            >
              <Phone className="w-4 h-4 mr-1" />
              Call
            </Button>
            <Button variant="default" size="sm" asChild>
              <Link to="/contact">Enroll Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 text-sm font-medium rounded-md",
                  location.pathname === item.href
                    ? "text-primary bg-primary-light"
                    : "text-foreground hover:text-primary hover:bg-muted"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex space-x-2 mt-4 px-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(`tel:${contactInfo.phone}`)}
                className="flex-1"
              >
                <Phone className="w-4 h-4 mr-1" />
                Call
              </Button>
              <Button variant="default" size="sm" className="flex-1" asChild>
                <Link to="/contact">Enroll</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;