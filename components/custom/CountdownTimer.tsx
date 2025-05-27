"use client";

import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(
      process.env.NEXT_PUBLIC_EVENT_DATE ?? "2025-05-30T00:00:00Z"
    );

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // Initial calculation

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 md:gap-6 text-white">
      <div className="flex flex-col items-center">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-center md:p-3 min-w-[4rem] md:min-w-[5rem]">
          <span className="text-2xl md:text-3xl font-bold">
            {timeLeft.days}
          </span>
        </div>
        <span className="text-sm mt-1">Days</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-center md:p-3 min-w-[4rem] md:min-w-[5rem]">
          <span className="text-2xl md:text-3xl font-bold">
            {timeLeft.hours}
          </span>
        </div>
        <span className="text-sm mt-1">Hours</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-center md:p-3 min-w-[4rem] md:min-w-[5rem]">
          <span className="text-2xl md:text-3xl font-bold">
            {timeLeft.minutes}
          </span>
        </div>
        <span className="text-sm mt-1">Minutes</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-center md:p-3 min-w-[4rem] md:min-w-[5rem]">
          <span className="text-2xl md:text-3xl font-bold">
            {timeLeft.seconds}
          </span>
        </div>
        <span className="text-sm mt-1">Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
