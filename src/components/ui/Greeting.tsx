import { useState, useEffect } from 'react';

const Greeting = () => {
  const [greetings] = useState([
    { greeting: 'ನಮಸ್ಕಾರ' },
    { greeting: 'नमस्ते' },
    { greeting: 'வணக்கம்' },
    { greeting: 'నమస్తే' },
    { greeting: 'Hello' },
    { greeting: 'Hola' },
    // Add more greetings as needed
  ]);

  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreetingIndex(
        (prevIndex) => (prevIndex + 1) % greetings.length,
      );
      setShowAnimation(true); // Trigger animation after text changes
      setTimeout(() => {
        setShowAnimation(false); // Remove animation class after a short delay
      }, 900); // Duration of the animation in milliseconds
    }, 2000); // Change the greeting every 2 seconds

    return () => clearInterval(interval);
  }, [greetings.length]);

  return (
    <div className='w-max'>
      <p
        className={`text-sm sm:text-xl md:text-2xl font-semibold ${
          showAnimation ? 'fade-in-out' : ''
        }`}
      >
        {greetings[currentGreetingIndex].greeting},
      </p>
    </div>
  );
};

export default Greeting;
