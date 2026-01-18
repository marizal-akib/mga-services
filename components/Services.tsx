import React from 'react';
import { PlaneLanding, PlaneTakeoff, RefreshCw, Luggage } from 'lucide-react';
import arrivalImage from '../assests/photos/Arrival_Meet_&_Greet.jpg';
import departureImage from '../assests/photos/Departure Assistance.jpg';
import porterImage from '../assests/photos/VIP_Porter_Service.jpg';
import heroImage from '../assests/photos/hero.jpg';

const services = [
  {
    icon: <PlaneLanding className="w-8 h-8" />,
    title: "Arrival Meet & Greet",
    desc: "Personal greeting at the airbridge, fast-track through immigration, luggage assistance, and escort to your waiting vehicle.",
    image: arrivalImage
  },
  {
    icon: <PlaneTakeoff className="w-8 h-8" />,
    title: "Departure Assistance",
    desc: "Kerbside greeting, expedited check-in and security processes, access to VIP lounges, and escort to the boarding gate.",
    image: departureImage
  },
  {
    icon: <RefreshCw className="w-8 h-8" />,
    title: "Transit & Connection",
    desc: "Seamless transfer between flights. We handle the logistics, gate transfers, and monitoring of flight schedules so you don't have to.",
    image: heroImage
  },
  {
    icon: <Luggage className="w-8 h-8" />,
    title: "VIP Porter Service",
    desc: "Dedicated porters to handle all baggage requirements, ensuring your hands are free for what matters most.",
    image: porterImage
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-dark-900 text-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-500 uppercase tracking-widest font-bold text-sm">Our Expertise</span>
          <h2 className="text-4xl font-serif mt-4 mb-6">Curated Airport Services</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group relative overflow-hidden bg-dark-800/90 hover:bg-dark-800 transition-all duration-300 rounded-2xl border border-white/5 shadow-xl">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
              </div>
              <div className="p-8 relative">
                <div className="absolute -top-8 right-8 bg-gold-500 p-3 rounded-full shadow-lg text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif mb-4 group-hover:text-gold-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                <a href="#booking" className="inline-block mt-6 text-gold-500 text-sm uppercase tracking-widest font-bold border-b border-transparent hover:border-gold-500 transition-all">
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;