import { motion } from "framer-motion";
import CyberCard from "@/components/cyber-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Image as ImageIcon } from "lucide-react";

// Using placeholder images - replace with actual event photos
const galleryImages = [
  {
    id: 1,
    alt: "CTF Competition in action",
    caption: "Participants solving challenges"
  },
  {
    id: 2,
    alt: "Prize Distribution",
    caption: "Winners receiving their prizes"
  },
  {
    id: 3,
    alt: "Team Collaboration",
    caption: "Teams working together"
  },
  {
    id: 4,
    alt: "Event Venue",
    caption: "Competition venue setup"
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function PastEventsGallery() {
  return (
    <section className="section-padding relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl font-orbitron font-bold mb-12 text-center text-primary">
            Event Highlights
          </h2>
          
          <CyberCard>
            <Carousel className="w-full">
              <CarouselContent>
                {galleryImages.map((image) => (
                  <CarouselItem key={image.id}>
                    <div className="relative aspect-video bg-muted/50 rounded-lg flex items-center justify-center">
                      {/* Placeholder - replace with actual images */}
                      <div className="flex flex-col items-center">
                        <ImageIcon className="h-24 w-24 text-primary/50 mb-4" />
                        <p className="text-muted-foreground">{image.caption}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <p className="text-center text-sm text-muted-foreground mt-6">
              Photos from previous CTF events and competitions
            </p>
          </CyberCard>
        </motion.div>
      </div>
    </section>
  );
}
