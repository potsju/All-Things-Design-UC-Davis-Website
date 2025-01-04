import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-black pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-gray-400 text-xl mb-12">
            Have any questions? Feel free to fill out this form and we'll get back to you as soon as possible.
          </p>
          
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;