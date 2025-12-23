
import React from 'react';
import { FloatingIconProps } from '../types';

export const FloatingElement: React.FC<FloatingIconProps> = ({ 
  icon, 
  initialX, 
  initialY, 
  delay = 0, 
  duration = 6,
  size = "text-4xl",
  color = "text-pink-500"
}) => {
  return (
    <div 
      className={`absolute ${initialX} ${initialY} ${size} ${color} pointer-events-none z-10 transition-opacity duration-1000`}
      style={{ 
        animation: `float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        willChange: 'transform'
      }}
    >
      {icon}
    </div>
  );
};
