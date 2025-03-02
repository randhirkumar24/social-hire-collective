
import { Heart, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-border/50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="animate-fade-in">
            <div className="mb-4">
              <a href="#" className="text-2xl font-semibold tracking-tight flex items-center">
                <span className="text-primary">Social</span>
                <span>Hire</span>
              </a>
            </div>
            <p className="text-foreground/70 mb-6">
              Connecting purpose-driven professionals with organizations making a positive social impact.
            </p>
            <div className="flex items-center">
              <Heart className="text-primary mr-2" size={16} />
              <p className="text-sm">Making a difference, one placement at a time</p>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Job Listings", href: "#jobs" },
                { label: "Our Partners", href: "#partners" },
                { label: "Join Talent Pool", href: "#contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-foreground/70">
                  123 Impact Way<br />
                  San Francisco, CA 94105
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-foreground/70 hover:text-primary transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <a href="mailto:info@socialhire.org" className="text-foreground/70 hover:text-primary transition-colors">
                  info@socialhire.org
                </a>
              </li>
            </ul>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-foreground/70 mb-4">
              Subscribe to our newsletter for the latest impact job opportunities and insights.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-l-md border border-border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button className="bg-primary text-white rounded-r-md px-4 py-2 hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 text-center animate-fade-in">
          <div className="flex justify-center space-x-6 mb-4">
            {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
              <a 
                key={social}
                href="#"
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-white transition-colors"
                aria-label={`Follow us on ${social}`}
              >
                <span className="capitalize text-sm">{social.charAt(0).toUpperCase()}</span>
              </a>
            ))}
          </div>
          
          <p className="text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} SocialHire. All rights reserved.
          </p>
          
          <div className="flex justify-center space-x-4 mt-2 text-xs text-foreground/50">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
