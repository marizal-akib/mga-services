import React, { useState } from 'react';
import Button from './Button';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'arrival',
    date: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your request. Our concierge team will contact you shortly to confirm details.");
    setFormData({ name: '', email: '', service: 'arrival', date: '', message: '' });
  };

  return (
    <section id="booking" className="py-24 bg-dark-900 relative">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/id/405/1920/1080')] bg-cover bg-center opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          <div className="w-full md:w-1/3 bg-gold-500 p-10 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif mb-6">Contact Concierge</h3>
              <p className="text-white/80 mb-8 text-sm leading-relaxed">
                Fill out the form to request a quote or book a service. For immediate assistance, please call our VIP line.
              </p>
              <div className="space-y-4 text-sm">
                <p>+880 1234-567890</p>
                <p>info@mgaservices.com</p>
                <p>Dhaka, Bangladesh • Middle East • USA</p>
              </div>
            </div>
            <div className="mt-10 md:mt-0">
               <div className="text-4xl font-serif font-bold">24/7</div>
               <div className="uppercase tracking-widest text-xs">Support Available</div>
            </div>
          </div>

          <div className="w-full md:w-2/3 p-10 md:p-14">
            <h2 className="text-3xl font-serif text-dark-900 mb-8">Request a Service</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold-500 transition-colors bg-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold-500 transition-colors bg-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Service Type</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold-500 transition-colors bg-transparent"
                  >
                    <option value="arrival">Arrival Meet & Greet</option>
                    <option value="departure">Departure Assistance</option>
                    <option value="transit">Transit/Connection</option>
                    <option value="porter">Porter Service</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Travel Date</label>
                  <input 
                    type="date" 
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold-500 transition-colors bg-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Additional Requests</label>
                <textarea 
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold-500 transition-colors bg-transparent resize-none"
                  placeholder="Flight numbers, special requirements, etc."
                ></textarea>
              </div>

              <div className="pt-4">
                <Button type="submit" variant="primary" className="w-full md:w-auto">
                  Submit Request
                </Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookingForm;