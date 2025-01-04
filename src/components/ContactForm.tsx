import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#1a1a1a] p-8 rounded-2xl shadow-xl">
      <div className="flex items-center justify-center mb-8">
        <h2 className="text-2xl font-bold text-white">LET'S</h2>
        <div className="flex gap-2 ml-3">
          {['T', 'A', 'L', 'K'].map((letter, index) => (
            <div 
              key={index}
              className="w-12 h-12 bg-[#2a2a2a] rounded-lg flex items-center justify-center text-white font-bold"
            >
              {letter}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-white mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-[#2a2a2a] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-white mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-[#2a2a2a] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-white mb-2">Message</label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-[#2a2a2a] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white py-3 rounded-full font-medium hover:opacity-90 transition duration-300"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;