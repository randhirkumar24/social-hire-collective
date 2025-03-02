
import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';
import JobListings from '../components/JobListings';
import CandidateForm from '../components/CandidateForm';
import Partners from '../components/Partners';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll animation observer
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

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <Hero />
      <About />
      <JobListings />
      <Testimonials />
      <Partners />
      <CandidateForm />
      <Footer />
    </div>
  );
};

export default Index;
