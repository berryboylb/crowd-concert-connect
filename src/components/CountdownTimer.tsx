
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set event date - June 21, 2025 at 4:00 PM
    const eventDate = new Date('2025-06-06T20:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-b from-festival-purple to-deep-purple rounded-lg p-2 sm:p-3 md:p-4 mb-1 sm:mb-2 border-2 border-neon-yellow/30 shadow-lg">
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neon-yellow font-festival animate-countdown-flip">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-white/80 text-xs sm:text-sm font-medium uppercase tracking-wide">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex justify-center items-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8">
      <TimeBlock value={timeLeft.days} label="Days" />
      <div className="text-neon-yellow text-lg sm:text-xl md:text-2xl font-bold">:</div>
      <TimeBlock value={timeLeft.hours} label="Hours" />
      <div className="text-neon-yellow text-lg sm:text-xl md:text-2xl font-bold">:</div>
      <TimeBlock value={timeLeft.minutes} label="Minutes" />
      <div className="text-neon-yellow text-lg sm:text-xl md:text-2xl font-bold">:</div>
      <TimeBlock value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;
