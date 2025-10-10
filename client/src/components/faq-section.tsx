import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CyberCard from "@/components/cyber-card";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is a CTF competition?",
    answer: "Capture The Flag (CTF) is a cybersecurity competition where participants solve security-related challenges to find hidden 'flags'. It's a practical way to learn and test your hacking skills in a legal and educational environment."
  },
  {
    question: "Do I need prior hacking experience?",
    answer: "No! While experience helps, beginners are welcome. We have challenges ranging from easy to hard difficulty levels. It's a great opportunity to learn cybersecurity hands-on."
  },
  {
    question: "Can I participate alone or do I need a team?",
    answer: "You can participate individually or form a team of up to 2 members. Team collaboration can be beneficial for solving diverse challenges."
  },
  {
    question: "What should I bring to the event?",
    answer: "Bring your laptop with a working battery, charger, and any tools you prefer. Ensure you have a stable internet connection capability. Also bring a valid ID proof for registration."
  },
  {
    question: "Is there an entry fee?",
    answer: "Pre-registration costs ₹100 per person, while spot registration is ₹150 per person. Payment details will be provided after form submission."
  },
  {
    question: "What are the prizes?",
    answer: "1st place wins ₹5,000, 2nd place wins ₹3,000, and all participants receive certificates of participation from the organizers."
  },
  {
    question: "What types of challenges will there be?",
    answer: "Challenges include Web Exploitation, OSINT (Open Source Intelligence), Cryptography, Digital Forensics, and Reverse Engineering. Each category tests different cybersecurity skills."
  },
  {
    question: "Can I use my own tools and scripts?",
    answer: "Yes, you can use any tools, scripts, or resources you want. However, attacking the CTF infrastructure or other participants is strictly prohibited."
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function FAQSection() {
  return (
    <section id="faq" className="section-padding relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <CyberCard>
            <h2 className="text-3xl sm:text-4xl font-orbitron font-bold mb-8 text-center text-primary">
              <HelpCircle className="inline mr-3" />
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CyberCard>
        </motion.div>
      </div>
    </section>
  );
}
