import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "Executive Traveler",
      text: "MGA Services transformed my chaotic connection at Heathrow into a relaxing break. The lounge access was superb."
    },
    {
      name: "Michael Chen",
      role: "CEO, TechFlow",
      text: "Professionalism at its finest. My clients were impressed by the seamless arrival experience. Highly recommended."
    },
    {
      name: "Elena Rodriguez",
      role: "Travel Blogger",
      text: "I travel exclusively with MGA now. The peace of mind knowing someone is there to handle the logistics is priceless."
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-dark-900 mb-6">Client Experiences</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Trusted by global executives, celebrities, and discerning travelers worldwide.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-10 shadow-xl border border-gray-100 border-t-4 border-t-gold-500 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <div className="flex gap-1 text-gold-500 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-600 italic mb-8 leading-loose">"{review.text}"</p>
              <div>
                <h4 className="font-serif font-bold text-lg text-dark-900">{review.name}</h4>
                <span className="text-xs uppercase tracking-widest text-gray-400">{review.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;