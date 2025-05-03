import React from 'react';
import { FaGithub, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io5';

const Footer = () => {
  // Array for quick links
  const quickLinks = [
    { title: 'Terms Of Use', path: '/terms-of-use' },
    { title: 'Privacy Policy', path: '/privacy-policy' },
    { title: 'About', path: '/about' },
    { title: 'Blog', path: '/blog' },
    { title: 'FAQ', path: '/faq' },
  ];

  // Array for social media icons
  const socialIcons = [
    { icon: <FaFacebookF />, link: 'https://facebook.com' },
    { icon: <IoLogoTwitter />, link: 'https://twitter.com' },
    { icon: <FaInstagram />, link: 'https://instagram.com' },
    { icon: <FaLinkedinIn />, link: 'https://linkedin.com' },
    { icon: <FaGithub />, link: 'https://github.com' },
  ];

  return (
    <footer className="bg-gray-800 text-white p-6 mt-16">
      <div className="container mx-auto space-y-6">
        {/* First row for links */}
        <div className="flex flex-wrap justify-center gap-8 text-sm">
          {quickLinks.map((link, index) => (
            <a key={index} href={link.path} className="hover:underline">
              {link.title}
            </a>
          ))}
        </div>

        {/* Second row for copyright */}
        <div className="text-center text-sm text-neutral-400">
          <p>Copyright © 2024 Movix | All Movies Downloads</p>
        </div>

        {/* Third row for icons */}
        <div className="flex justify-center space-x-6">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.link}
              style={{boxShadow:"0px 0px 6px 2px rgba(255,0,0,0.6)"}}
              className="text-xl bg-slate-600 rounded-full p-2 transition-all duration-400"
             
              // Darker red shadow on hover
               // Reset to original shadow
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
