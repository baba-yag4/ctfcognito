import { useState } from "react";
import { motion } from "framer-motion";
import CyberCard from "@/components/cyber-card";
import { Code, Lock, Search, FileText, Binary, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const challenges = [
  {
    icon: Code,
    title: "Web Exploitation",
    description: "Find and exploit vulnerabilities in web applications",
    difficulty: "Medium"
  },
  {
    icon: Search,
    title: "OSINT",
    description: "Gather intelligence from publicly available sources",
    difficulty: "Easy"
  },
  {
    icon: Lock,
    title: "Cryptography",
    description: "Decrypt messages and break encryption",
    difficulty: "Hard"
  },
  {
    icon: FileText,
    title: "Forensics",
    description: "Analyze files and recover hidden data",
    difficulty: "Medium"
  },
  {
    icon: Binary,
    title: "Reverse Engineering",
    description: "Understand and reverse compiled code",
    difficulty: "Hard"
  }
];

const sampleChallenge = {
  title: "Simple XOR Cipher",
  description: "Decrypt this message: 'Uryyb Jbeyq' (Hint: ROT13)",
  flag: "HELLO WORLD"
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

export default function ChallengePreview() {
  const [answer, setAnswer] = useState("");
  const [solved, setSolved] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (answer.toUpperCase() === sampleChallenge.flag) {
      setSolved(true);
      toast({
        title: "🎉 Correct!",
        description: "You've solved the sample challenge!",
      });
    } else {
      toast({
        title: "Incorrect",
        description: "Try again! Remember the hint.",
        variant: "destructive"
      });
    }
  };

  return (
    <section className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl font-orbitron font-bold mb-4 text-center text-primary">
            Challenge Categories
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Explore various categories of cybersecurity challenges. Test your skills across different domains!
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {challenges.map((challenge, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <CyberCard>
                <challenge.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">{challenge.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{challenge.description}</p>
                <span className={`text-xs px-3 py-1 rounded-full ${
                  challenge.difficulty === 'Easy' ? 'bg-green-500/20 text-green-500' :
                  challenge.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-500' :
                  'bg-red-500/20 text-red-500'
                }`}>
                  {challenge.difficulty}
                </span>
              </CyberCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <CyberCard>
            <h3 className="text-2xl font-orbitron font-bold mb-4 text-primary">
              🔥 Try a Sample Challenge
            </h3>
            <div className="bg-muted/50 p-4 rounded-lg mb-4">
              <h4 className="font-bold text-foreground mb-2">{sampleChallenge.title}</h4>
              <p className="text-sm text-muted-foreground mb-3">{sampleChallenge.description}</p>
              <code className="block bg-background p-3 rounded border border-border text-primary font-mono">
                Uryyb Jbeyq
              </code>
            </div>
            
            {!solved ? (
              <form onSubmit={handleSubmit} className="flex gap-3">
                <Input
                  placeholder="Enter your answer..."
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" className="bg-primary hover:bg-primary/90">
                  Submit Flag
                </Button>
              </form>
            ) : (
              <div className="flex items-center gap-3 text-green-500">
                <CheckCircle className="h-6 w-6" />
                <span className="font-semibold">Challenge Solved!</span>
              </div>
            )}
          </CyberCard>
        </motion.div>
      </div>
    </section>
  );
}
