import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountdownTimerProps {
  targetDate: string;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="grid grid-cols-2 sm:flex sm:justify-center gap-2 sm:gap-4 md:gap-8 max-w-xs sm:max-w-none mx-auto" data-testid="countdown-timer">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <motion.div
          key={unit}
          className="countdown-digit rounded-lg p-2 sm:p-3 md:p-4 text-center min-w-[60px] sm:min-w-[70px] md:min-w-[80px]"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          data-testid={`countdown-${unit}`}
        >
          <motion.div
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-code text-foreground"
            key={value}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {formatNumber(value)}
          </motion.div>
          <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
            {unit}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
