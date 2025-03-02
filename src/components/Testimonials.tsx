
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Working with SocialHire transformed our recruitment process. They understand our mission and consistently connect us with candidates who share our values and bring the skills we need.",
    name: "Sarah Johnson",
    title: "Director of Operations",
    organization: "Global Health Initiative",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiIGZpbGw9IiM3MzlFQjYiLz4KICA8dGV4dCB4PSIyNSIgeT0iMzIiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyMCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlNKPC90ZXh0Pgo8L3N2Zz4="
  },
  {
    id: 2,
    quote: "I was looking for a career that would allow me to apply my skills toward meaningful work. SocialHire not only found me a position that matched my technical expertise but also aligned perfectly with my personal values.",
    name: "Michael Chen",
    title: "Software Engineer",
    organization: "Tech For All",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiIGZpbGw9IiM2N0I4NzgiLz4KICA8dGV4dCB4PSIyNSIgeT0iMzIiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyMCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1DPC90ZXh0Pgo8L3N2Zz4="
  },
  {
    id: 3,
    quote: "As a nonprofit with limited resources, finding the right talent is critical. SocialHire understands the unique challenges we face and has become an invaluable partner in building our team of dedicated professionals.",
    name: "Amara Wilson",
    title: "Executive Director",
    organization: "Education Access Alliance",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiIGZpbGw9IiNEMTc2N0YiLz4KICA8dGV4dCB4PSIyNSIgeT0iMzIiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyMCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFXPC90ZXh0Pgo8L3N2Zz4="
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-secondary/20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-primary font-medium mb-3 animate-fade-in">SUCCESS STORIES</p>
          <h2 className="text-3xl md:text-4xl font-bold animate-fade-in">
            Hear From Our Community
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mt-6 rounded-full animate-fade-in"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="glass-card rounded-2xl p-8 md:p-10 animate-fade-in">
            <div className="text-primary/20 mb-6">
              <Quote size={48} />
            </div>
            
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
                }`}
                style={{ display: index === activeIndex ? 'block' : 'none' }}
              >
                <p className="text-lg md:text-xl italic mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-foreground/60">
                      {testimonial.title}, {testimonial.organization}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="flex justify-between mt-10">
              <button 
                onClick={handlePrev}
                className="h-10 w-10 rounded-full bg-white shadow-sm border border-border/50 flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      index === activeIndex 
                        ? 'w-8 bg-primary' 
                        : 'w-2.5 bg-secondary hover:bg-primary/40'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={handleNext}
                className="h-10 w-10 rounded-full bg-white shadow-sm border border-border/50 flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
