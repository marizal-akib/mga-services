import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
}

export enum MessageSender {
  USER = 'user',
  BOT = 'model'
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: MessageSender;
  timestamp: Date;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  flightNumber: string;
  date: string;
  notes: string;
}