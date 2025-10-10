import { motion } from "framer-motion";
import CyberCard from "@/components/cyber-card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Arjun K",
    role: "Previous Participant",
    content: "CTF Cognito was an amazing experience! The challenges were well-crafted and really tested my skills. Learned so much about web exploitation and cryptography.",
    rating: 5
  },
  {
    name: "Priya M",
    role: "Cybersecurity Student",
    content: "As a beginner, I was nervous, but the organizers were super helpful. The OSINT challenges were my favorite. Definitely recommend this event!",
    rating: 5
  },
  {
    name: "Rahul S",
    role: "Bug Bounty Hunter",
    content: "Great competition with diverse challenges. The forensics section was particularly challenging. Well organized and great prizes too!",
    rating: 5
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function TestimonialsSection() {
  return (
    <section className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl font-orbitron font-bold mb-12 text-center text-primary">
            What Participants Say
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <CyberCard>
                <Quote className="text-primary mb-4 h-8 w-8" />
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <div className="flex">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
              </CyberCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
