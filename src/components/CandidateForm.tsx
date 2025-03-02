
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
    position: '',
    experience: '',
    availability: ''
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
        title: "Application Received",
        description: "Thank you for your application. Our team will contact you within 24 hours to discuss placement opportunities.",
        duration: 5000,
      });
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        resume: null,
        position: '',
        experience: '',
        availability: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <p className="text-primary font-medium mb-3">48-HOUR PLACEMENT GUARANTEE</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Hired Within 2 Days</h2>
            
            <p className="text-foreground/70 mb-8">
              Submit your profile today and get placed in a top hospitality position within 48 hours - guaranteed! Our specialized recruiters work with premium hotels, restaurants, and resorts to fill urgent positions with qualified candidates like you.
            </p>
            
            <div className="space-y-5">
              {[
                "Guaranteed placement within 48 hours",
                "No placement fee for candidates",
                "Positions at top hospitality establishments",
                "Competitive salary packages",
                "Long-term career growth opportunities"
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
                    required
                    placeholder="Your WhatsApp number"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="position">Desired Position</Label>
                <Select onValueChange={(val) => handleSelectChange(val, 'position')} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="waiter">Waiter/Waitress</SelectItem>
                    <SelectItem value="housekeeping">Housekeeping Staff</SelectItem>
                    <SelectItem value="receptionist">Front Desk Receptionist</SelectItem>
                    <SelectItem value="steward">Steward</SelectItem>
                    <SelectItem value="helper">Kitchen Helper</SelectItem>
                    <SelectItem value="bartender">Bartender</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
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
                <p className="text-xs text-foreground/60 mt-1">Optional - Accepted formats: PDF, DOC, DOCX</p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="experience">Experience Level</Label>
                <Select onValueChange={(val) => handleSelectChange(val, 'experience')}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fresher">Fresher (No experience)</SelectItem>
                    <SelectItem value="entry">Entry Level (0-1 year)</SelectItem>
                    <SelectItem value="mid">Experienced (1-3 years)</SelectItem>
                    <SelectItem value="senior">Senior (3+ years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="availability">When can you start?</Label>
                <Select onValueChange={(val) => handleSelectChange(val, 'availability')}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediately</SelectItem>
                    <SelectItem value="week">Within a week</SelectItem>
                    <SelectItem value="two-weeks">Within two weeks</SelectItem>
                    <SelectItem value="month">Within a month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Apply Now - Get Hired in 48 Hours"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandidateForm;
