import { motion } from "framer-motion";
import AnimatedCounter from "@/components/animated-counter";
import { Users, Trophy, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 150,
    label: "Expected Participants",
    suffix: "+"
  },
  {
    icon: Trophy,
    value: 8000,
    label: "Total Prize Pool",
    prefix: "₹"
  },
  {
    icon: Award,
    value: 50,
    label: "Challenges",
    suffix: "+"
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

export default function ParticipantCounter() {
  return (
    <section className="section-padding relative z-10">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 text-center hover:border-primary transition-all duration-300"
            >
              <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-foreground mb-2">
                <AnimatedCounter 
                  end={stat.value} 
                  prefix={stat.prefix} 
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
