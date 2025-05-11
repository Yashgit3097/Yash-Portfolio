import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebookF, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="relative bg-zinc-950 text-zinc-200 py-6 px-4 overflow-hidden">
            {/* Glowing background layer (same as Home/Skills) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-pink-500/5 to-cyan-500/10 blur-2xl pointer-events-none z-0" />

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">

                {/* Name */}
                <div className="text-center md:text-left">
                    <h1 className="text-xl font-bold text-amber-50">Yash Gandhi</h1>
                </div>

                {/* Social Icons */}
                <div className="flex gap-6 text-2xl justify-center">
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-pink-400 transition duration-300"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-400 transition duration-300"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-500 transition duration-300"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-gray-300 transition duration-300"
                    >
                        <FaGithub />
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-center md:text-right">
                    <p className="text-sm text-zinc-400">&copy; 2025 Yash Gandhi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
