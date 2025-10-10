import { motion } from "framer-motion";
import CyberCard from "@/components/cyber-card";
import { Building2 } from "lucide-react";
import offensoLogo from "@assets/Offenso-Logo-White.png_1759068476216.webp";

const sponsors = [
  {
    name: "Offenso Hackers Academy",
    logo: offensoLogo,
    tier: "Platinum Sponsor"
  },
  {
    name: "Royal College of Engineering",
    logo: null,
    tier: "Venue Partner"
  },
  {
    name: "Student Committee Cybersecurity",
    logo: null,
    tier: "Organizing Partner"
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
      staggerChildren: 0.15
    }
  }
};

export default function SponsorsCarousel() {
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
            <Building2 className="inline mr-3" />
            Our Partners
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {sponsors.map((sponsor, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <CyberCard>
                <div className="flex flex-col items-center justify-center p-6 space-y-4">
                  {sponsor.logo ? (
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name}
                      className="h-24 w-auto object-contain"
                    />
                  ) : (
                    <div className="h-24 w-24 rounded-full bg-primary/20 flex items-center justify-center">
                      <Building2 className="h-12 w-12 text-primary" />
                    </div>
                  )}
                  <div className="text-center">
                    <p className="text-xs text-secondary font-semibold mb-1">{sponsor.tier}</p>
                    <h3 className="text-lg font-bold text-foreground">{sponsor.name}</h3>
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
