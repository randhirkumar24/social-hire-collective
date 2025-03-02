
import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Briefcase, ArrowRight } from 'lucide-react';

// Sample job data
const jobsData = [
  {
    id: 1,
    title: "Sustainability Program Manager",
    organization: "GreenFuture Foundation",
    location: "San Francisco, CA",
    type: "Full-time",
    category: "Environmental",
    description: "Lead sustainability initiatives focused on urban renewal and climate action."
  },
  {
    id: 2,
    title: "Community Outreach Coordinator",
    organization: "Education for All",
    location: "Chicago, IL",
    type: "Full-time",
    category: "Education",
    description: "Develop and implement community programs to increase educational access in underserved communities."
  },
  {
    id: 3,
    title: "Director of Development",
    organization: "Medical Relief International",
    location: "Remote",
    type: "Full-time",
    category: "Healthcare",
    description: "Oversee fundraising and development for global health initiatives."
  },
  {
    id: 4,
    title: "UX Designer for Accessibility",
    organization: "Inclusive Tech",
    location: "Boston, MA",
    type: "Contract",
    category: "Technology",
    description: "Design accessible digital solutions for organizations serving diverse populations."
  },
  {
    id: 5,
    title: "Social Media Manager",
    organization: "Ocean Conservation Alliance",
    location: "Remote",
    type: "Part-time",
    category: "Environmental",
    description: "Create engaging content to promote ocean conservation awareness and initiatives."
  },
  {
    id: 6,
    title: "Financial Inclusion Specialist",
    organization: "Community Finance",
    location: "Atlanta, GA",
    type: "Full-time",
    category: "Economic Development",
    description: "Develop programs to provide financial services and education to underbanked communities."
  }
];

// Category options
const categories = ["All", "Environmental", "Education", "Healthcare", "Technology", "Economic Development"];

const JobListings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Filter jobs based on search term and category
  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="jobs" className="py-20 md:py-28 bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-primary font-medium mb-3 animate-fade-in">CAREER OPPORTUNITIES</p>
          <h2 className="text-3xl md:text-4xl font-bold animate-fade-in">
            Jobs With Impact
          </h2>
          <p className="mt-4 text-foreground/70 animate-fade-in">
            Discover meaningful roles at organizations driving social change
          </p>
          <div className="h-1 w-20 bg-accent mx-auto mt-6 rounded-full animate-fade-in"></div>
        </div>

        {/* Search and filter */}
        <div className="mb-10 animate-fade-in">
          <div className="bg-white rounded-xl shadow-sm border border-border/50 p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/40" size={18} />
                <input
                  type="text"
                  placeholder="Search for jobs..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === category 
                        ? 'bg-primary text-white' 
                        : 'bg-secondary/70 text-foreground/70 hover:bg-secondary'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Job listings */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job, index) => (
            <div 
              key={job.id}
              className="bg-white rounded-xl shadow-sm border border-border/50 p-6 hover:shadow-md transition-all animate-fade-in"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              <div className="flex justify-between items-start mb-3">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                  {job.category}
                </Badge>
                <Badge variant="outline" className="text-foreground/60">
                  {job.type}
                </Badge>
              </div>
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-primary font-medium mb-4">{job.organization}</p>
              
              <p className="text-foreground/70 mb-5 line-clamp-2">{job.description}</p>
              
              <div className="flex items-center text-sm text-foreground/60 mb-6">
                <MapPin size={16} className="mr-1" /> {job.location}
              </div>
              
              <Button className="w-full mt-2 group">
                View Position 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in">
          <Button variant="outline" size="lg" className="shadow-sm">
            View All Opportunities <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JobListings;
