import React from 'react';
import aboutImage from '../assests/photos/Who_We_Are.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          <div className="w-full md:w-1/2 relative">
             <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-gold-500/30" />
             <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-gold-500/30" />
            <img 
               src={aboutImage} 
               alt="Luxury Concierge" 
               className="w-full h-[520px] object-cover shadow-2xl rounded-3xl grayscale hover:grayscale-0 transition-all duration-700"
             />
          </div>

          <div className="w-full md:w-1/2">
            <h4 className="text-gold-500 uppercase tracking-widest font-bold text-sm mb-4">Who We Are</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-dark-900 mb-8">MGA: Trusted Airport Assistance Since 2002</h2>
            <p className="text-gray-600 leading-loose mb-6">
              Meet Greet and Assist Services (MGA) was established in 2002 by senior retired aviation officials to assist passengers at Bangladesh’s busiest international airport in Dhaka. Despite initial resistance, the founders’ aviation expertise helped secure government approval for this new service concept. MGA quickly gained recognition by offering specialized passenger assistance, including wheelchair services, and earned international appreciation by serving high-profile guests such as the Vice President of the World Bank.
            </p>
            <p className="text-gray-600 leading-loose mb-6">
              Within a few years, MGA expanded its network to the Middle East and the USA, and by 2010 began serving international organizations operating in Bangladesh. The company steadily broadened its services and, by 2014, positioned itself as a one-stop solution for travel needs, partnering with scheduled banks to provide airport assistance to credit card holders.
            </p>
            <p className="text-gray-600 leading-loose mb-8">
              MGA has played a significant role in Bangladesh’s tourism sector as a founding member of key tourism organizations and regularly provides complimentary services to Haj pilgrims and general travelers. The company later expanded into air ticketing and tour packages, including installment-based payment options in collaboration with banks. MGA aims to serve 100,000 passengers annually and establish offices in at least ten countries, positioning itself as a reliable leader in travel and airport assistance services.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                'Government-approved airport assistance',
                'Trusted by banks and global organizations',
                'Established aviation leadership since 2002'
              ].map((item) => (
                <div key={item} className="bg-white shadow-lg border border-gray-100 rounded-2xl px-5 py-4 text-sm text-gray-600">
                  <span className="text-gold-500 font-semibold">•</span> {item}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-8 mt-8 border-t border-gray-100 pt-8">
              <div>
                <span className="block text-4xl font-serif text-gold-500 mb-2">22+</span>
                <span className="text-sm uppercase tracking-wider text-gray-500">Years of Service</span>
              </div>
              <div>
                <span className="block text-4xl font-serif text-gold-500 mb-2">100K</span>
                <span className="text-sm uppercase tracking-wider text-gray-500">Annual Target</span>
              </div>
              <div>
                <span className="block text-4xl font-serif text-gold-500 mb-2">10+</span>
                <span className="text-sm uppercase tracking-wider text-gray-500">Country Expansion</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;