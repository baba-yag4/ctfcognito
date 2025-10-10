import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import AnimatedBackground from "@/components/animated-background";
import FloatingParticles from "@/components/floating-particles";
import MatrixRain from "@/components/matrix-rain";
import CustomCursor from "@/components/custom-cursor";
import CountdownTimer from "@/components/countdown-timer";
import ModernText from "@/components/modern-text";
import CyberCard from "@/components/cyber-card";
import AnimatedCounter from "@/components/animated-counter";
import FAQSection from "@/components/faq-section";
import TestimonialsSection from "@/components/testimonials-section";
import VenueMap from "@/components/venue-map";
import EventTimeline from "@/components/event-timeline";
import SponsorsCarousel from "@/components/sponsors-carousel";
import NewsletterSignup from "@/components/newsletter-signup";
import ParticipantCounter from "@/components/participant-counter";
import ChallengePreview from "@/components/challenge-preview";
import PastEventsGallery from "@/components/past-events-gallery";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Trophy, 
  Users, 
  Flag, 
  Globe, 
  Key, 
  Search, 
  Settings, 
  Network, 
  Binary,
  Check,
  Phone,
  Mail,
  Instagram,
  MapPin,
  Info,
  Laptop,
  Rocket,
  Clock,
  Heart
} from "lucide-react";
import ctfCognitoLogo from "@assets/Adobe Express - file_1759044466581.png";
import offensoLogo from "@assets/Offenso-Logo-White.png_1759068476216.webp";
import cognitoTechfestLogo from "@assets/Untitled design_1759044466581.png";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleRegistration = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSev7Ci4m418KohWOVVkdB5-UqBE8iX6b-7yeMMSJ8lcuv2TrQ/viewform?usp=header', '_blank');
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatedBackground />
      <MatrixRain />
      <FloatingParticles />
      <CustomCursor />
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center section-padding">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* CTF Cognito Logo */}
          <motion.div className="mb-0 -mt-8 sm:-mt-12 flex justify-center" variants={fadeInUp}>
            <div className="relative filter drop-shadow-[0_0_24px_rgba(0,255,255,0.35)]">
              <img 
                src={ctfCognitoLogo} 
                alt="CTF Cognito Logo" 
                className="h-auto w-40 sm:w-56 md:w-72 lg:w-80 object-contain transition-opacity duration-300" 
                loading="eager"
                decoding="async"
                data-testid="ctf-cognito-logo"
              />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={fadeInUp}>
            <ModernText 
              text="CTF COGNITO" 
              className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-orbitron font-black mb-4 sm:mb-6 text-gradient leading-tight"
              data-testid="main-heading"
            />
          </motion.div>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-3xl text-muted-foreground mb-4 sm:mb-6 font-semibold tracking-wide px-4 sm:px-0"
            variants={fadeInUp}
            data-testid="subtitle"
          >
            All Kerala Tech Fest Cybersecurity Challenge
          </motion.p>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-secondary mb-8 sm:mb-12 md:mb-16 font-medium tracking-wider"
            variants={fadeInUp}
            data-testid="organizer-text"
          >
            Capture The Flag
          </motion.p>

          {/* Countdown Timer */}
          <motion.div className="mb-8 sm:mb-12 px-4 sm:px-0" variants={fadeInUp}>
            <h3 className="text-xl sm:text-2xl font-orbitron font-bold mb-4 sm:mb-6 text-primary" data-testid="countdown-heading">
              Event Countdown
            </h3>
            <CountdownTimer targetDate="2025-10-17T10:00:00" />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0 max-w-md sm:max-w-none mx-auto"
            variants={fadeInUp}
          >
            <Button
              onClick={handleRegistration}
              className="inline-flex items-center justify-center w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors duration-300"
              data-testid="button-register"
            >
              <Users className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
              Register Now
            </Button>
            <Button
              variant="outline"
              className="inline-flex items-center justify-center w-full sm:w-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground rounded-lg transition-colors duration-300"
              onClick={() => document.getElementById('event')?.scrollIntoView({ behavior: 'smooth' })}
              data-testid="button-learn-more"
            >
              <Info className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Event Details Section */}
      <section id="event" className="relative section-padding bg-card/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-foreground" data-testid="event-details-heading">
              Event Details
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Join the ultimate cybersecurity challenge and test your skills against the best minds in Kerala
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Date & Time */}
            <motion.div variants={fadeInUp}>
              <CyberCard className="text-center" data-testid="card-date-time">
                <Calendar className="text-4xl text-primary mb-4 mx-auto" />
                <h3 className="text-2xl md:text-3xl font-orbitron font-black mb-6 text-gradient">Date & Time</h3>
                <div className="space-y-4">
                  <p className="text-lg font-semibold text-secondary">October 17, 2025</p>
                  
                  <div className="bg-card/30 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Registration</span>
                      <span className="text-foreground font-medium">9:00 AM - 10:00 AM</span>
                    </div>
                    <div className="border-t border-border/50"></div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Competition</span>
                      <span className="text-primary font-semibold">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="border-t border-border/50"></div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Results</span>
                      <span className="text-foreground font-medium">4:30 PM - 5:00 PM</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground text-center">6 Hours of Intense Competition</p>
                </div>
              </CyberCard>
            </motion.div>

            {/* Prizes */}
            <motion.div variants={fadeInUp}>
              <CyberCard className="text-center" data-testid="card-prizes">
                <Trophy className="text-4xl text-primary mb-4 mx-auto" />
                <h3 className="text-2xl md:text-3xl font-orbitron font-black mb-6 text-gradient">Prizes</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg">1st Place</span>
                    <span className="text-xl font-bold text-secondary">
                      ₹<AnimatedCounter end={5000} />
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg">2nd Place</span>
                    <span className="text-xl font-bold text-accent">
                      ₹<AnimatedCounter end={3000} />
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">+ Certificates for all participants</p>
                </div>
              </CyberCard>
            </motion.div>

            {/* Registration */}
            <motion.div variants={fadeInUp}>
              <CyberCard className="text-center" data-testid="card-registration">
                <Users className="text-4xl text-primary mb-4 mx-auto" />
                <h3 className="text-2xl md:text-3xl font-orbitron font-black mb-6 text-gradient">Registration</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Pre-Registration</span>
                    <span className="text-xl font-bold text-secondary">₹75</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg">Spot Registration</span>
                    <span className="text-xl font-bold text-accent">₹80</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Solo or Duo Teams (1-2 members)</p>
                  <p className="text-sm text-destructive font-semibold">Deadline: Oct 15, 2025</p>
                </div>
              </CyberCard>
            </motion.div>
          </motion.div>

          {/* Organizers */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-orbitron font-bold text-center mb-12 text-gradient" data-testid="organizers-heading">
              Organized By
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16">
              {/* Offenso Logo */}
              <div className="text-center" data-testid="organizer-offenso">
                <div className="mb-4 p-4 bg-card/30 rounded-lg border border-border/50">
                  <img 
                    src={offensoLogo} 
                    alt="Offenso Logo" 
                    className="w-40 h-20 object-contain mx-auto filter brightness-110 hover:brightness-125 transition-all duration-300" 
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="text-lg text-muted-foreground">In Association With</p>
                <p className="text-xl font-semibold text-primary">Offenso Hackers Academy</p>
              </div>
              
              {/* College Logo */}
              <div className="text-center" data-testid="organizer-college">
                <div className="mb-4">
                  <img 
                    src={cognitoTechfestLogo} 
                    alt="Cognito Techfest Logo" 
                    className="w-24 h-24 object-contain mx-auto logo-glow transition-opacity duration-300" 
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="text-lg text-muted-foreground">Hosted By</p>
                <p className="text-xl font-semibold text-primary">Student Committee Cybersecurity</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About CTF Section */}
      <section id="about" className="relative section-padding bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-foreground" data-testid="about-ctf-heading">
              About CTF
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Capture The Flag is a cybersecurity competition designed to challenge and develop your hacking skills through real-world scenarios
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <CyberCard data-testid="card-what-is-ctf">
                  <h3 className="text-2xl font-orbitron font-bold mb-4 text-primary">
                    <Flag className="inline mr-3" />What is CTF?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Capture The Flag competitions are cybersecurity events where participants solve challenges 
                    across various domains including web security, cryptography, reverse engineering, 
                    forensics, and penetration testing to find hidden "flags".
                  </p>
                </CyberCard>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <CyberCard data-testid="card-team-format">
                  <h3 className="text-2xl font-orbitron font-bold mb-4 text-primary">
                    <Users className="inline mr-3" />Team Format
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Participate individually or form a team of maximum 2 members. 
                    Collaboration and diverse skill sets often lead to better performance in solving complex challenges.
                  </p>
                </CyberCard>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <CyberCard data-testid="card-eligibility">
                  <h3 className="text-2xl font-orbitron font-bold mb-4 text-primary">
                    <Globe className="inline mr-3" />Eligibility
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Open to everyone! Whether you're a student, professional, or cybersecurity enthusiast, 
                    all skill levels are welcome to participate and learn.
                  </p>
                </CyberCard>
              </motion.div>
            </motion.div>

            <motion.div 
              className="space-y-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <CyberCard data-testid="card-challenge-categories">
                  <h3 className="text-2xl font-orbitron font-bold mb-6 text-primary">
                    <Flag className="inline mr-3" />Challenge Categories
                  </h3>
                  <div className="space-y-4">
                    {[
                      { icon: Globe, label: "Web Exploitation" },
                      { icon: Search, label: "OSINT (Open-Source Intelligence)" },
                      { icon: Key, label: "Cryptography" },
                      { icon: Search, label: "Forensics" },
                      { icon: Settings, label: "Reverse Engineering" }
                    ].map((category, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <category.icon className="text-secondary" size={20} />
                        <span className="text-foreground">{category.label}</span>
                      </div>
                    ))}
                  </div>
                </CyberCard>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <CyberCard data-testid="card-rules">
                  <h3 className="text-2xl font-orbitron font-bold mb-4 text-primary">
                    <Check className="inline mr-3" />Rules & Guidelines
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {[
                      "All challenges must be solved within the provided environment",
                      "No brute forcing challenges or platforms unless explicitly mentioned",
                      "Collaboration between different teams is strictly prohibited",
                      "Flags must be submitted exactly as instructed",
                      "No attacking other participants or infrastructure outside intended scope",
                      "White-hat hacking competition only - ethical conduct required"
                    ].map((rule, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Check className="text-secondary mt-1 flex-shrink-0" size={16} />
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </CyberCard>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact & Venue Section */}
      <section id="contact" className="relative section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-foreground" data-testid="contact-venue-heading">
              Contact & Venue
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get in touch with us for any queries or additional information about the event
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <CyberCard data-testid="card-contact-info">
                  <h3 className="text-2xl font-orbitron font-bold mb-6 text-primary">
                    <Mail className="inline mr-3" />Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Phone className="text-secondary" />
                      <div>
                        <p className="font-semibold text-foreground">Phone</p>
                        <p className="text-muted-foreground">+91 9495909680</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Mail className="text-secondary" />
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <a href="mailto:abhinavkoolath@gmail.com" className="text-muted-foreground hover:text-secondary transition-colors cursor-pointer">abhinavkoolath@gmail.com</a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Instagram className="text-secondary" />
                      <div>
                        <p className="font-semibold text-foreground">Instagram</p>
                        <a href="https://www.instagram.com/ctf_cognito/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors cursor-pointer">@ctf_cognito</a>
                      </div>
                    </div>
                  </div>
                </CyberCard>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <CyberCard data-testid="card-coordinators">
                  <h3 className="text-2xl font-orbitron font-bold mb-6 text-primary">
                    <Users className="inline mr-3" />Event Coordinators
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Phone className="text-secondary" />
                      <div>
                        <p className="font-semibold text-foreground">Abhinav K</p>
                        <a href="tel:+917306989680" className="text-muted-foreground hover:text-secondary transition-colors cursor-pointer">+91 7306989680</a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Phone className="text-secondary" />
                      <div>
                        <p className="font-semibold text-foreground">Anfas PK</p>
                        <a href="tel:+919037484202" className="text-muted-foreground hover:text-secondary transition-colors cursor-pointer">+91 9037484202</a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Phone className="text-secondary" />
                      <div>
                        <p className="font-semibold text-foreground">Suhail</p>
                        <a href="tel:+917025642469" className="text-muted-foreground hover:text-secondary transition-colors cursor-pointer">+91 70256 42469</a>
                      </div>
                    </div>
                  </div>
                </CyberCard>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <CyberCard data-testid="card-questions">
                  <h3 className="text-2xl font-orbitron font-bold mb-6 text-primary">
                    <Info className="inline mr-3" />Have Questions?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Feel free to reach out to our organizing team for any clarifications about the event, 
                    registration process, or technical requirements.
                  </p>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => window.open('tel:+919495909680', '_self')}
                    data-testid="button-contact-organizers"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Contact Organizers
                  </Button>
                </CyberCard>
              </motion.div>
            </motion.div>

            {/* Venue Information */}
            <motion.div 
              className="space-y-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp}>
                <CyberCard data-testid="card-venue-details">
                  <h3 className="text-2xl font-orbitron font-bold mb-6 text-primary">
                    <MapPin className="inline mr-3" />Venue Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-foreground text-lg">Royal College of Engineering and Technology</p>
                      <p className="text-muted-foreground">
                        Akkikavu, Thrissur, Kerala 680501<br />
                        Computer Science Department<br />
                        IIT Bombay Lab
                      </p>
                    </div>
                    <div className="flex items-start space-x-4 mt-6">
                      <Info className="text-secondary mt-1" />
                      <div>
                        <p className="font-semibold text-foreground">Additional Information</p>
                        <ul className="text-muted-foreground text-sm space-y-1 mt-2">
                          <li>• High-speed internet connectivity provided</li>
                          <li>• Power outlets available at all workstations</li>
                          <li>• Parking facilities available</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CyberCard>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <CyberCard data-testid="card-what-to-bring">
                  <h3 className="text-2xl font-orbitron font-bold mb-6 text-primary">
                    <Laptop className="inline mr-3" />What to Bring
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Laptop with Kali Linux/Ubuntu preferred (or use lab PCs provided)",
                      "Charger and extension cord (if bringing own laptop)",
                      "Valid ID proof for verification",
                      "Notebook and pen for rough work"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="text-secondary flex-shrink-0" size={16} />
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CyberCard>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Participant Counter Stats */}
      <ParticipantCounter />

      {/* Challenge Preview Section */}
      <ChallengePreview />

      {/* Event Timeline & Venue Map Side by Side */}
      <section className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <EventTimeline />
            <VenueMap />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Past Events Gallery */}
      <PastEventsGallery />

      {/* FAQ Section */}
      <FAQSection />

      {/* Sponsors Carousel */}
      <SponsorsCarousel />

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Final CTA Section */}
      <section className="relative section-padding bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-gradient" data-testid="final-cta-heading">
            Ready to Hack the Future?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join Kerala's premier cybersecurity challenge and compete with the brightest minds. 
            Register now and secure your spot in this epic battle of skills!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={handleRegistration}
              className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 animate-pulse-glow text-lg"
              data-testid="button-final-register"
            >
              <Rocket className="mr-3 h-5 w-5" />
              Register for CTF Cognito
            </Button>
            <Button
              variant="outline"
              className="inline-flex items-center px-8 py-4 border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground rounded-lg transition-all duration-300 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              data-testid="button-contact-final"
            >
              <Phone className="mr-3 h-5 w-5" />
              Contact Us
            </Button>
          </div>

          <div className="flex justify-center items-center space-x-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Calendar className="text-primary" size={16} />
              <span>Oct 17, 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="text-primary" size={16} />
              <span>10 AM - 4 PM</span>
            </div>
            <div className="flex items-center space-x-2">
              <Trophy className="text-primary" size={16} />
              <span>₹8K+ Prizes</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative bg-card/50 border-t border-border section-padding">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Section with Enhanced Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* CTF Cognito Brand */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-orbitron font-bold mb-4 text-foreground" data-testid="footer-title">
                  CTF COGNITO 2025
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Kerala's premier cybersecurity challenge featuring cutting-edge security competitions,
                  networking opportunities, and skill development workshops.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="text-primary" size={16} />
                    <span className="text-foreground">October 17, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="text-primary" size={16} />
                    <span className="text-foreground">10 AM - 4 PM</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Trophy className="text-primary" size={16} />
                    <span className="text-foreground">₹8,000+ Prizes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="text-primary" size={16} />
                    <span className="text-foreground">Solo/Duo Teams</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Quick Navigation */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="text-xl font-orbitron font-bold mb-6 text-secondary">Quick Links</h4>
                <div className="space-y-3">
                  <a href="#home" className="block text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 flex items-center space-x-2" data-testid="footer-link-home">
                    <span className="w-1 h-1 bg-primary rounded-full opacity-50"></span>
                    <span>Home</span>
                  </a>
                  <a href="#event" className="block text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 flex items-center space-x-2" data-testid="footer-link-event">
                    <span className="w-1 h-1 bg-primary rounded-full opacity-50"></span>
                    <span>Event Details</span>
                  </a>
                  <a href="#about" className="block text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 flex items-center space-x-2" data-testid="footer-link-about">
                    <span className="w-1 h-1 bg-primary rounded-full opacity-50"></span>
                    <span>About CTF</span>
                  </a>
                  <a href="#contact" className="block text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 flex items-center space-x-2" data-testid="footer-link-contact">
                    <span className="w-1 h-1 bg-primary rounded-full opacity-50"></span>
                    <span>Contact</span>
                  </a>
                </div>
              </motion.div>
            </div>
            
            {/* Connect & Follow */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-xl font-orbitron font-bold mb-6 text-secondary">Connect</h4>
                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm mb-4">
                    Follow us for updates and cybersecurity insights
                  </p>
                  <div className="flex space-x-4">
                    <a href="https://www.instagram.com/ctf_cognito/" target="_blank" rel="noopener noreferrer" className="group p-3 rounded-lg bg-card/50 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 neon-border" data-testid="footer-social-instagram">
                      <Instagram className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                    </a>
                    <div className="relative group">
                      <div className="p-3 rounded-lg bg-card/50 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 neon-border cursor-not-allowed opacity-60" data-testid="footer-social-twitter">
                        <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </div>
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-background border border-primary/30 text-primary px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                        Coming Soon
                      </div>
                    </div>
                    <a href="https://www.linkedin.com/in/abhinavkoolath" target="_blank" rel="noopener noreferrer" className="group p-3 rounded-lg bg-card/50 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 neon-border" data-testid="footer-social-linkedin">
                      <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <div className="relative group">
                      <div className="p-3 rounded-lg bg-card/50 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 neon-border cursor-not-allowed opacity-60" data-testid="footer-social-telegram">
                        <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm5.568 8.16c-.18 1.896-.96 6.504-1.356 8.628-.168.9-.504 1.2-.816 1.236-.696.06-1.224-.456-1.896-.9-1.056-.696-1.656-1.128-2.676-1.8-1.188-.78-.42-1.212.264-1.908.18-.18 3.252-2.976 3.312-3.228a.24.24 0 00-.06-.216c-.072-.06-.168-.036-.24-.024-.096.024-1.62 1.032-4.572 3.036-.432.3-.816.444-1.164.432-.384-.012-1.116-.216-1.668-.396-.66-.216-1.188-.336-1.14-.708.024-.192.156-.384.396-.576 1.716-.756 2.856-1.344 3.396-1.728 1.548-.756 3.132-1.584 4.44-3.084z"/>
                        </svg>
                      </div>
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-background border border-primary/30 text-primary px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                        Coming Soon
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Cyber Separator */}
          <div className="cyber-separator mb-8"></div>
          
          {/* Bottom Section */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="mb-6">
              <p className="text-lg font-orbitron font-semibold text-gradient mb-2" data-testid="footer-organizer">
                Capture The Flag
              </p>
              <p className="text-muted-foreground mb-4">
                Organized by Royal College of Engineering and Technology
              </p>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-muted-foreground">in association with</span>
                <img 
                  src={offensoLogo} 
                  alt="Offenso Logo" 
                  className="w-20 h-10 object-contain filter brightness-110 transition-opacity duration-300" 
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-primary/20">
              <p className="text-muted-foreground mb-4 md:mb-0" data-testid="footer-copyright">
                © 2025 RCET. All rights reserved. | CTF Cognito
              </p>
              <p className="text-sm text-muted-foreground flex items-center" data-testid="footer-credit">
                Crafted with <Heart className="inline text-destructive mx-1 animate-pulse" size={16} /> by Cybersecurity Student Coordinators
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
