import { motion } from "framer-motion";
import CyberCard from "@/components/cyber-card";
import { Clock, CheckCircle, Circle } from "lucide-react";

const timelineEvents = [
  {
    time: "9:00 AM - 9:30 AM",
    title: "Registration & Check-in",
    description: "Participant registration and welcome"
  },
  {
    time: "9:30 AM - 10:00 AM",
    title: "Opening Ceremony",
    description: "Event introduction and rules briefing"
  },
  {
    time: "10:00 AM - 12:00 PM",
    title: "CTF Competition",
    description: "Solve challenges and capture flags"
  },
  {
    time: "12:00 PM - 1:00 PM",
    title: "Lunch Break",
    description: "Refreshments and networking"
  },
  {
    time: "1:00 PM - 4:00 PM",
    title: "CTF Competition",
    description: "Competition continues"
  },
  {
    time: "4:00 PM - 4:30 PM",
    title: "Results & Prize Distribution",
    description: "Winner announcement and awards ceremony"
  },
  {
    time: "4:30 PM",
    title: "Closing",
    description: "Thank you and group photo"
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function EventTimeline() {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <CyberCard>
        <h3 className="text-2xl font-orbitron font-bold mb-8 text-primary">
          <Clock className="inline mr-3" />
          Event Schedule
        </h3>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
          
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative pl-12">
                {/* Timeline dot */}
                <div className="absolute left-2 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-secondary">{event.time}</p>
                  <h4 className="text-lg font-bold text-foreground">{event.title}</h4>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CyberCard>
    </motion.div>
  );
}
