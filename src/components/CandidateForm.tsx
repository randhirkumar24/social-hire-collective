
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from 'lucide-react';

const CandidateForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    interests: '',
    experience: '',
    values: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files?.[0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Submission Received",
        description: "Thank you for your interest. Our team will review your information and reach out soon.",
        duration: 5000,
      });
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        resume: null,
        interests: '',
        experience: '',
        values: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <p className="text-primary font-medium mb-3">JOIN OUR TALENT POOL</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Impact-Driven Career</h2>
            
            <p className="text-foreground/70 mb-8">
              Submit your profile to our talent pool and we'll match you with opportunities aligned to your values and expertise. Our specialized recruiters focus on connecting purpose-driven professionals with organizations making a difference.
            </p>
            
            <div className="space-y-5">
              {[
                "Access to exclusive social impact opportunities",
                "Career guidance from impact-focused recruiters",
                "Networking with like-minded professionals",
                "Support throughout your application journey"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-2xl animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="resume">Resume/CV</Label>
                <Input
                  id="resume"
                  name="resume"
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-primary/10 file:text-primary hover:file:bg-primary/20 file:cursor-pointer file:rounded-md"
                />
                <p className="text-xs text-foreground/60 mt-1">Accepted formats: PDF, DOC, DOCX</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="experience">Experience Level</Label>
                <Select onValueChange={(val) => handleSelectChange(val, 'experience')}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                    <SelectItem value="mid">Mid-Level (3-5 years)</SelectItem>
                    <SelectItem value="senior">Senior (6-9 years)</SelectItem>
                    <SelectItem value="executive">Executive (10+ years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="interests">Areas of Interest</Label>
                <Textarea
                  id="interests"
                  name="interests"
                  value={formData.interests}
                  onChange={handleInputChange}
                  placeholder="What social impact areas are you most passionate about?"
                  className="min-h-[80px]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="values">Your Values</Label>
                <Textarea
                  id="values"
                  name="values"
                  value={formData.values}
                  onChange={handleInputChange}
                  placeholder="Tell us about your values and what drives your interest in social impact work"
                  className="min-h-[100px]"
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Your Profile"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandidateForm;
