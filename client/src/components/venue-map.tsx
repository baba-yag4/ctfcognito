import { motion } from "framer-motion";
import CyberCard from "@/components/cyber-card";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function VenueMap() {
  const venueLocation = "Royal College of Engineering and Technology, Akkikavu, Thrissur, Kerala 680501";
  const mapsUrl = "https://www.google.com/maps/place/Royal+College+of+Engineering+and+Technology/@10.5274,76.2164,17z";

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <CyberCard>
        <h3 className="text-2xl font-orbitron font-bold mb-6 text-primary">
          <MapPin className="inline mr-3" />
          Find Us Here
        </h3>
        <div className="space-y-4">
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2704839484395!2d76.21392731478443!3d10.527433892531982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7eeb3c0000001%3A0x4e3c0f8e7f8e7f8e!2sRoyal%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Venue Location Map"
            />
          </div>
          <p className="text-muted-foreground text-sm">{venueLocation}</p>
          <Button
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => window.open(mapsUrl, '_blank')}
          >
            <Navigation className="mr-2 h-4 w-4" />
            Get Directions
          </Button>
        </div>
      </CyberCard>
    </motion.div>
  );
}
