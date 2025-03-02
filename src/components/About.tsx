
import { Heart, Users, Building } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-primary font-medium mb-3 animate-fade-in">OUR MISSION</p>
          <h2 className="text-3xl md:text-4xl font-bold animate-fade-in">
            Recruitment With a Social Purpose
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mt-6 rounded-full animate-fade-in"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-8 md:p-10 rounded-2xl animate-fade-in">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
              At <span className="font-semibold">SocialHire</span>, we believe that talent should be directed toward solving our world's most pressing challenges. We've built a specialized recruitment platform that connects mission-driven professionals with organizations creating positive social change.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mt-6">
              Every placement we make creates a double impact: helping organizations amplify their mission while enabling professionals to build meaningful careers aligned with their values.
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {[
              {
                icon: Heart,
                title: "Value-Aligned Matching",
                description: "We carefully match candidates with organizations that share their core values and vision for social impact."
              },
              {
                icon: Users,
                title: "Diverse Talent Pool",
                description: "Our network includes professionals from all backgrounds, bringing diverse perspectives to social-impact work."
              },
              {
                icon: Building,
                title: "Partner Organizations",
                description: "We work with nonprofits, B-corps, social enterprises, and impact-focused divisions of larger companies."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex gap-5 p-6 bg-white rounded-xl shadow-sm border border-border/50 animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
