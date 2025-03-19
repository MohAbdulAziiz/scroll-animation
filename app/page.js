'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import Image from "next/image";

const HeaderWrapper = styled(motion.header)`
  padding: 16px 24px;
  color: black;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: black;
  cursor: pointer;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavBar = styled(motion.nav)`
  display: flex;
  gap: 20px;
  color: black;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
  height: 100vh;
  width: 250px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: -4px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: right 0.3s ease-in-out;
  z-index: 50;
`;

const NavLink = styled(ScrollLink)`
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  padding: 10px 0;
  width: 100%;
  text-align: center;
  &:hover {
    color: #0070f3;
  }
`;

const MenuButton = styled.button`
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  color: black;
  display: none;
  position: absolute;
  right: 20px;
  z-index: 100;

  @media (max-width: 768px) {
    display: block;
  }
`;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <HeaderWrapper
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Logo>My Portfolio</Logo>
      <NavContainer>
        <NavBar>
          <NavLink to="about" smooth={true} duration={600}>About</NavLink>
          <NavLink to="skills" smooth={true} duration={600}>Skills</NavLink>
          <NavLink to="portfolio" smooth={true} duration={600}>Portfolio</NavLink>
          <NavLink to="services" smooth={true} duration={600}>Services</NavLink>
          <NavLink to="contact" smooth={true} duration={600}>Contact</NavLink>
        </NavBar>
        <MenuButton onClick={toggleMenu} aria-label="Toggle menu">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>
      </NavContainer>
      <MobileNav ref={menuRef} $isOpen={menuOpen}>
        <NavLink to="about" smooth={true} duration={600} onClick={toggleMenu}>About</NavLink>
        <NavLink to="skills" smooth={true} duration={600} onClick={toggleMenu}>Skills</NavLink>
        <NavLink to="portfolio" smooth={true} duration={600} onClick={toggleMenu}>Portfolio</NavLink>
        <NavLink to="services" smooth={true} duration={600} onClick={toggleMenu}>Services</NavLink>
        <NavLink to="contact" smooth={true} duration={600} onClick={toggleMenu}>Contact</NavLink>
      </MobileNav>
    </HeaderWrapper>
  );
}

const FooterWrapper = styled.footer`
  background: white;
  color: black;
  text-align: center;
  padding: 20px;
`;

function Footer() {
  return (
    <FooterWrapper>
      <p>&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
    </FooterWrapper>
  );
}

export default function AboutMe() {
  return (
    <div className="relative flex flex-col min-h-screen bg-gray-100">
      <Header />
<main className="flex-grow bg-gray-200">
 {/* About Section */}
<div id="about" className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full px-6 py-16">
  <div className="md:w-1/2 flex justify-center">
    <Image 
      src="/aziz.jpeg" 
      alt="Profile Picture" 
      width={320} 
      height={320} 
      className="w-60 h-60 md:w-80 md:h-80 rounded-full shadow-lg object-cover border-4 border-yellow-400 transition-transform duration-300 hover:scale-110"
    />
  </div>
  <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
    <h1 className="text-5xl font-bold text-blue-800 mb-4">About Me</h1>
    <p className="text-lg text-gray-600 leading-relaxed">
      Hi, I'm a passionate <span className="font-semibold text-yellow-500">UI/UX Designer & Frontend Developer</span> with a strong background in crafting visually appealing and user-friendly designs.
    </p>
    <p className="text-lg text-gray-600 leading-relaxed mt-3">
      I specialize in <span className="font-semibold text-yellow-500">responsive web design, design systems, and user experience optimization</span>.  
      With expertise in tools like <span className="font-semibold text-blue-500">Figma, Adobe XD, and React.js</span>, I turn ideas into seamless digital experiences.
    </p>
    <p className="text-lg text-gray-600 leading-relaxed mt-3">
      Throughout my career, I've collaborated with startups and enterprises to build intuitive interfaces that enhance engagement and usability.
      My goal is to bridge the gap between aesthetics and functionality, ensuring that every product I design is both beautiful and practical.
    </p>
    <div className="mt-6 flex flex-col md:flex-row gap-4">
      <a href="#contact" className="bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-yellow-600 transition duration-300">
        Let's Connect
      </a>
      <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 transition duration-300 flex items-center">
        <svg className="w-5 h-5 mr-2" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.5h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.31c.84-1.03 2.15-1.31 3.25-1.31 2.49 0 4.5 2.01 4.5 4.5v5.5z"/></svg>
        LinkedIn
      </a>
    </div>
  </div>
</div>
<motion.div
  id="skills"
  className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full px-6 py-16 bg-gray-50"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: false }}
>
  {/* Image Section */}
  <div className="md:w-1/2 flex justify-center">
    <motion.img
      src="/skills.jpeg"
      alt="Skills"
      className="w-60 h-60 md:w-80 md:h-80 rounded-xl shadow-xl object-cover border-4 border-transparent bg-gradient-to-r from-green-400 to-blue-500 p-1"
      whileHover={{ scale: 1.1, rotate: 2 }}
    />
  </div>

  {/* Skills Section */}
  <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
    <motion.h2 
      className="text-5xl font-extrabold text-gray-800 mb-6"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      Skills
    </motion.h2>

    {/* Skills Buttons */}
    <div className="grid grid-cols-2 gap-4">
      {[
        { name: "Python", image: "/phyton.jpeg", desc: "Bahasa pemrograman untuk AI & Data Science." },
        { name: "SQL", image: "/sql.jpeg", desc: "Bahasa untuk mengelola dan mengolah database." },
        { name: "React.js", image: "/react.jpeg", desc: "Library JavaScript untuk membangun UI modern." },
        { name: "Data Science", image: "/datascience.jpeg", desc: "Analisis data menggunakan Machine Learning." }
      ].map((skill) => (
        <motion.div
          key={skill.name}
          className="relative flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <img src={skill.image} alt={skill.name} className="w-16 h-16 mb-2 object-contain" />
          <span className="text-lg font-semibold text-gray-800">{skill.name}</span>

          {/* Deskripsi Muncul saat Hover */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white text-sm p-2 rounded-b-xl opacity-0 transition-opacity duration-300 hover:opacity-100"
          >
            {skill.desc}
          </motion.div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.div>

{/* Portfolio Section */}
<motion.div
  id="portfolio"
  className="flex flex-col items-center justify-center min-h-screen w-full px-6 py-16 bg-gray-50"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: false }}
>
  {/* Portfolio Header */}
  <h2 className="text-5xl font-extrabold text-gray-800 mb-12 text-center">
    My Portfolio
  </h2>

  {/* Project List */}
  <div className="space-y-16">
    
    {/* Project 1 */}
    <div className="flex flex-col md:flex-row items-center gap-8">
      {/* Text */}
      <div className="md:w-1/2 text-center md:text-left">
        <h3 className="text-3xl font-bold text-blue-700">E-Commerce Website</h3>
        <p className="text-lg text-gray-600 leading-relaxed mt-2">
          Built an interactive and scalable e-commerce platform using React.js, Tailwind CSS, and Firebase.
        </p>
        <a
          href="/ecommerce-project"
          className="inline-block mt-4 px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
        >
          View Project
        </a>
      </div>

      {/* Image */}
      <motion.img
        src="/ecommerce.jpeg"
        alt="E-Commerce Website"
        className="md:w-1/2 w-80 h-56 rounded-xl shadow-xl object-cover border-4 border-transparent bg-gradient-to-r from-blue-400 to-purple-500 p-1"
        whileHover={{ scale: 1.1, rotate: 2 }}
      />
    </div>

    {/* Project 2 */}
    <div className="flex flex-col md:flex-row-reverse items-center gap-8">
      {/* Text */}
      <div className="md:w-1/2 text-center md:text-left">
        <h3 className="text-3xl font-bold text-green-700">Data Science Dashboard</h3>
        <p className="text-lg text-gray-600 leading-relaxed mt-2">
          Developed a Data Science Dashboard using Python, Pandas, and Streamlit for real-time data visualization.
        </p>
        <a
          href="/data-dashboard"
          className="inline-block mt-4 px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-lg shadow-md transition-all duration-300 hover:bg-green-700 hover:shadow-lg"
        >
          View Project
        </a>
      </div>

      {/* Image */}
      <motion.img
        src="/dashboard.jpeg"
        alt="Data Science Dashboard"
        className="md:w-1/2 w-80 h-56 rounded-xl shadow-xl object-cover border-4 border-transparent bg-gradient-to-r from-green-400 to-teal-500 p-1"
        whileHover={{ scale: 1.1, rotate: -2 }}
      />
    </div>

  </div>
</motion.div>

{/* Services Section */}
<motion.div
  id="services"
  className="flex flex-col items-center justify-center min-h-screen w-full px-6 py-16 bg-gray-50"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: false }}
>
  {/* Services Header */}
  <h2 className="text-5xl font-extrabold text-gray-800 mb-12 text-center">
    My Services
  </h2>

  {/* Services Grid */}
  <div className="grid md:grid-cols-2 gap-8">

    {/* Web Development */}
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center border-b-4 border-purple-500"
      whileHover={{ scale: 1.05 }}
    >
      <img src="/web.jpeg" alt="Web Development" className="w-16 h-16 mb-4" />
      <h3 className="text-2xl font-semibold text-purple-700">Web Development</h3>
      <p className="text-gray-600 mt-2">Building responsive and scalable websites with React.js, Next.js, and Tailwind CSS.</p>
    </motion.div>

    {/* Data Visualization */}
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center border-b-4 border-blue-500"
      whileHover={{ scale: 1.05 }}
    >
      <img src="/visual.jpeg" alt="Data Visualization" className="w-16 h-16 mb-4" />
      <h3 className="text-2xl font-semibold text-blue-700">Data Visualization</h3>
      <p className="text-gray-600 mt-2">Transforming data into insightful visuals using Python, Power BI, and Tableau.</p>
    </motion.div>

    {/* UI/UX Design */}
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center border-b-4 border-green-500"
      whileHover={{ scale: 1.05 }}
    >
      <img src="/ui.jpeg" alt="UI/UX Design" className="w-16 h-16 mb-4" />
      <h3 className="text-2xl font-semibold text-green-700">UI/UX Design</h3>
      <p className="text-gray-600 mt-2">Creating intuitive and user-friendly designs with Figma & Adobe XD.</p>
    </motion.div>

    {/* AI Development */}
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center border-b-4 border-red-500"
      whileHover={{ scale: 1.05 }}
    >
      <img src="/ai.jpeg" alt="AI Development" className="w-16 h-16 mb-4" />
      <h3 className="text-2xl font-semibold text-red-700">AI Development</h3>
      <p className="text-gray-600 mt-2">Developing AI models using Python, TensorFlow, and OpenAI.</p>
    </motion.div>

  </div>
</motion.div>
{/* Contact Section */}
<motion.div
  id="contact"
  className="flex flex-col items-center justify-center min-h-screen w-full px-6 py-16 bg-gray-50"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: false }}
>
  {/* Contact Header */}
  <h2 className="text-5xl font-extrabold text-gray-800 mb-6 text-center">
    Get in Touch
  </h2>
  <p className="text-lg text-gray-600 mb-10 text-center">
    Let's collaborate! Fill out the form below or reach me via email & social media.
  </p>

  {/* Contact Form */}
  <motion.form
    className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    {/* Name */}
    <div className="mb-6">
      <label className="block text-gray-700 font-semibold mb-2">Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Email */}
    <div className="mb-6">
      <label className="block text-gray-700 font-semibold mb-2">Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Message */}
    <div className="mb-6">
      <label className="block text-gray-700 font-semibold mb-2">Message</label>
      <textarea
        rows={4}
        placeholder="Write your message..."
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Submit Button */}
    <motion.button
      className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Send Message
    </motion.button>
  </motion.form>

  {/* Contact Information */}
  <div className="mt-8 text-center">
    <p className="text-gray-700">📧 Email: yourname@email.com</p>
    <p className="text-gray-700">📍 Location: Your City, Your Country</p>

    {/* Social Media Links */}
    <div className="mt-4 flex justify-center gap-6">
      <a href="#" className="text-blue-600 hover:scale-110 transition-transform">
        <i className="fab fa-linkedin text-3xl"></i>
      </a>
      <a href="#" className="text-gray-800 hover:scale-110 transition-transform">
        <i className="fab fa-github text-3xl"></i>
      </a>
      <a href="#" className="text-blue-500 hover:scale-110 transition-transform">
        <i className="fab fa-twitter text-3xl"></i>
      </a>
    </div>
  </div>
</motion.div>

    </main>

      <Footer />
    </div>
  );
}
