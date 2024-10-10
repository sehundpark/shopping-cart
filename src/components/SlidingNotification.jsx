import { useState, useEffect } from "react";

export const SlidingNotification = ({ message, onClose, duration = 5000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Wait for animation to finish before removing from DOM
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`sliding-notification ${isVisible ? "visible" : ""}`}>
      <p>{message}</p>
      <button onClick={() => setIsVisible(false)}>✕</button>
    </div>
  );
};
