import React from 'react';
import Button from './Button';
import { ArrowDown, ShieldCheck, Clock, Globe } from 'lucide-react';
import heroImage from '../assests/photos/hero.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] max-h-[900px] w-full overflow-hidden">
      {/* Background Image - Desktop: 16:9 crop, Mobile: taller 4:5 */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center 35%' // Faces in middle third
        }}
      >
        {/* Strong overlay for text contrast - darker gradient from bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/40 via-dark-900/65 to-dark-900" />
        {/* Additional side gradient on desktop for left-aligned text */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-dark-900/80 via-dark-900/20 to-transparent" />
      </div>

      {/* Content Container - Left-aligned on desktop, centered on mobile */}
      <div className="relative h-full flex items-end md:items-center">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 pb-20 md:pb-0">
          
          {/* Main Content - Left third on desktop, centered on mobile */}
          <div className="max-w-xl md:max-w-lg lg:max-w-xl text-center md:text-left">
            
            {/* Tag line - what you are */}
            <span className="inline-block text-gold-400 tracking-[0.25em] uppercase text-xs font-bold mb-3 md:mb-4 animate-fade-in-up">
              Est. 2002 • Bangladesh
            </span>
            
            {/* Big headline - what problem you solve */}
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.1] mb-4 md:mb-5 animate-fade-in-up delay-100">
              Premium Airport Assistance <span className="text-gold-400">You Can Trust</span>
            </h1>
            
            {/* One sentence explanation */}
            <p className="text-gray-100 text-base md:text-lg max-w-md mb-6 md:mb-8 leading-relaxed animate-fade-in-up delay-200">
              Government-approved meet & greet services across 50+ airports. Fast-track, VIP lounges, and seamless travel since 2002.
            </p>
            
            {/* Buttons - below text, not floating */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-10 animate-fade-in-up delay-300 justify-center md:justify-start">
              <Button 
                variant="primary" 
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto shadow-2xl"
              >
                Book Service Now
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white/90 text-white hover:bg-white hover:text-dark-900 w-full sm:w-auto backdrop-blur-sm"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Our Services
              </Button>
            </div>

            {/* Trust signals - small icons, simple text */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-md mx-auto md:mx-0 animate-fade-in-up delay-500">
              <div className="flex flex-col items-center md:items-start gap-1.5">
                <ShieldCheck size={18} className="text-gold-400" />
                <div className="text-xs text-white/90 font-medium text-center md:text-left leading-tight">
                  Govt<br className="md:hidden" /> Approved
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start gap-1.5">
                <Clock size={18} className="text-gold-400" />
                <div className="text-xs text-white/90 font-medium text-center md:text-left leading-tight">
                  22+ Years<br className="md:hidden" /> Experience
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start gap-1.5">
                <Globe size={18} className="text-gold-400" />
                <div className="text-xs text-white/90 font-medium text-center md:text-left leading-tight">
                  50+ Airports<br className="md:hidden" /> Worldwide
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 md:left-auto md:right-12 transform -translate-x-1/2 md:translate-x-0 animate-bounce text-white/50">
        <ArrowDown size={28} />
      </div>
    </section>
  );
};

export default Hero;