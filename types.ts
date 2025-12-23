
import React from 'react';

export interface FloatingIconProps {
  icon: React.ReactNode;
  initialX: string;
  initialY: string;
  delay?: number;
  duration?: number;
  size?: string;
  color?: string;
}

export interface CityEvent {
  id: string;
  title: string;
  category: 'cinema' | 'music' | 'party' | 'food';
  location: string;
}

export interface ApiResponse {
  status: 'success' | 'error';
  message: string;
}