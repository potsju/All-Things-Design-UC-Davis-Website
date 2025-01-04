import React from 'react';
import { Mail, Instagram, Linkedin, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-6xl md:text-7xl font-bold mb-6">GET IN TOUCH</h2>
        <p className="text-gray-400 text-xl mb-10">
          Get in contact with us if you have any questions.
        </p>
        
        <a 
          href="/contact"
          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full 
                   hover:opacity-90 transition duration-300 text-lg font-medium mb-12"
        >
          Contact Us
          <span className="ml-2">→</span>
        </a>

        <div className="flex justify-center space-x-6">
          <SocialLink href="/email" icon={<Mail />} />
          <SocialLink href="/instagram" icon={<Instagram />} />
          <SocialLink href="/linkedin" icon={<Linkedin />} />
          <SocialLink href="/facebook" icon={<Facebook />} />
          <SocialLink href="/medium" icon={<MessageCircle />} />
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href}
    className="p-3 bg-[#222] rounded-full hover:bg-[#333] transition duration-300"
  >
    {icon}
  </a>
);

export default Footer;