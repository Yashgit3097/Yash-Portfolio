import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaBehance } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import image from '../assets/profileImage.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            className="w-full sticky top-0 z-50 bg-zinc-950 text-zinc-200 flex items-center justify-between px-10 py-5 shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
        >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-pink-500/5 to-cyan-500/10 blur-2xl pointer-events-none z-0" />

            {/* Left - Logo and Name with Side by Side Layout */}
            <div className="flex items-center gap-5 relative z-10">
                {/* Avatar */}
                <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12} glareEnable={true} glareMaxOpacity={0.2} scale={1.02}>
                    <motion.img
                        src={image}
                        alt="avatar"
                        className="w-14 h-14 rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        whileHover={{ scale: 1.2, rotate: 15 }}
                    />
                </Tilt>

                {/* Text with animation */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <h1 className="text-amber-50 text-2xl font-bold cursor-pointer transition duration-300 hover:text-cyan-400">
                        Yash Gandhi
                    </h1>
                </motion.div>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex justify-end gap-5 text-lg font-semibold relative z-10">
                {['home', 'skills', 'projects', 'contact'].map((section, index) => (
                    <motion.div
                        key={section}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.2, duration: 0.8, ease: 'easeOut' }}
                        whileHover={{ scale: 1.1, color: '#D1D5DB' }} // Slightly scale up and change color
                    >
                        <Link
                            to={section}
                            smooth={true}
                            duration={500}
                            className="cursor-pointer hover:text-cyan-400 transition duration-300 ease-in-out"
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Hamburger Icon (Mobile) */}
            <div className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes size={28} className="text-white" /> : <FaBars size={28} className="text-white" />}
            </div>

            {/* Mobile Sidebar Menu (slide from LEFT, blur background) */}
            <motion.div
                className={`fixed top-0 left-0 h-screen w-64 backdrop-blur-xl bg-zinc-900/90 text-zinc-200 p-6 shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform duration-300 ease-in-out z-40`}
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
                {/* Sidebar Content */}
                <div className="flex flex-col items-center gap-3 mb-8">
                    <img
                        src={image}
                        alt="avatar"
                        className="w-20 h-20 rounded-full"
                    />
                    <div className="text-center">
                        <h2 className="text-amber-50 font-bold text-lg">Yash Gandhi</h2>
                        <p className="text-sm text-zinc-400">Web Developer</p>
                    </div>
                </div>

                {/* Mobile Nav Links */}
                <nav className="flex flex-col gap-6 text-lg font-semibold">
                    {['home', 'skills', 'projects', 'contact'].map((section, index) => (
                        <motion.div
                            key={section}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.2, duration: 0.8, ease: 'easeOut' }}
                            whileHover={{ scale: 1.1, color: '#D1D5DB' }}
                        >
                            <Link
                                to={section}
                                smooth={true}
                                duration={500}
                                className="cursor-pointer hover:text-cyan-400 transition duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </Link>
                        </motion.div>
                    ))}
                </nav>

                {/* Social Icons */}
                <div className="flex fixed bottom-0 px-2 py-5 border-zinc-300 justify-center gap-14 mt-12 text-2xl">
                    <motion.a
                        href="#"
                        className="hover:text-cyan-400"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <FaLinkedin />
                    </motion.a>
                    <motion.a
                        href="#"
                        className="hover:text-cyan-400"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <FaGithub />
                    </motion.a>
                    <motion.a
                        href="#"
                        className="hover:text-cyan-400"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <FaBehance />
                    </motion.a>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Navbar;
