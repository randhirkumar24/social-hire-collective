
import { useRef, useEffect } from 'react';

const Partners = () => {
  const partnersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const partners = [
    {
      name: "EcoFuture Foundation",
      logo: "EF",
      description: "Working on climate change solutions and renewable energy initiatives."
    },
    {
      name: "Education Access Alliance",
      logo: "EAA",
      description: "Expanding educational opportunities in underserved communities globally."
    },
    {
      name: "Global Health Initiative",
      logo: "GHI",
      description: "Providing healthcare access and medical resources to developing regions."
    },
    {
      name: "Tech For All",
      logo: "TFA",
      description: "Building technology solutions for social good and digital inclusion."
    },
    {
      name: "Community Development Fund",
      logo: "CDF",
      description: "Supporting economic empowerment and sustainable community growth."
    },
    {
      name: "Human Rights Action",
      logo: "HRA",
      description: "Advocating for human rights and justice across the globe."
    }
  ];

  return (
    <section id="partners" className="py-20 md:py-28" ref={partnersRef}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-primary font-medium mb-3 scroll-animation">OUR NETWORK</p>
          <h2 className="text-3xl md:text-4xl font-bold scroll-animation">
            Impact-Driven Organizations
          </h2>
          <p className="mt-4 text-foreground/70 scroll-animation">
            We partner with organizations committed to creating positive social change
          </p>
          <div className="h-1 w-20 bg-accent mx-auto mt-6 rounded-full scroll-animation"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border border-border/50 shadow-sm overflow-hidden transition-all hover:shadow-md hover:border-accent/30 scroll-animation"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="p-8">
                <div className="h-16 w-16 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-xl font-bold mb-4">
                  {partner.logo}
                </div>
                <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                <p className="text-foreground/70">{partner.description}</p>
              </div>
              <div className="bg-secondary/40 px-8 py-4 flex justify-between items-center">
                <span className="text-sm text-foreground/60">Partner since 2022</span>
                <span className="text-sm font-medium text-primary">View Projects</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
