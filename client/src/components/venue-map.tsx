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
  const venueLocation = "Royal College of Engineering & Technology, Chiramanangad P.O, Akkikavu Rd, Thrissur, Kerala 680604";
  const mapsUrl = "https://maps.app.goo.gl/eQKFzAVjAGasjrn87";

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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.3486771234567!2d76.1032991!3d10.6906572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7c06ae727fb23%3A0xef071dcef7bf35f5!2sRoyal%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
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
