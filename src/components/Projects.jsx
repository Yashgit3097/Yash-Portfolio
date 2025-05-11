import React from 'react';
import projectVideo from '../assets/last.mp4';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Projects = () => {
    return (
        <motion.div
            id='projects'
            className='relative w-full py-24 bg-zinc-950 text-white overflow-hidden'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-pink-500/5 to-cyan-500/10 blur-2xl pointer-events-none z-0" />

            {/* Heading */}
            <motion.h1
                className='text-5xl font-extrabold text-cyan-300 text-center mb-20 relative z-10'
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                Projects
            </motion.h1>

            {/* Content */}
            <div className='w-[90%] mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 relative z-10'>

                {/* Tilted Video Section */}
                <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12} glareEnable={true} glareMaxOpacity={0.2} scale={1.02}>
                    <motion.div
                        className="w-full lg:w-[600px] rounded-3xl overflow-hidden shadow-xl border border-white/10 backdrop-blur-md bg-white/5"
                        initial={{ opacity: 0, scale: 1.05 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.1, ease: 'easeInOut' }}
                    >
                        <video
                            className='w-full h-full object-cover rounded-3xl'
                            src={projectVideo}
                            autoPlay
                            loop
                            muted
                        />
                    </motion.div>
                </Tilt>

                {/* Glass-Style Animated Card */}
                <motion.div
                    className="w-full lg:w-[500px] bg-white/5 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/10"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                >
                    <h2 className="text-3xl font-bold mb-4 text-amber-100">📬 PostX – A Modern Social Posting App</h2>
                    <p className="text-zinc-300 mb-3">
                        <span className="font-semibold text-white">Built with:</span> EJS, Express.js, MongoDB, Tailwind CSS
                    </p>
                    <p className="text-zinc-400 mb-4">
                        <span className="font-semibold text-white">Theme:</span> Dark UI (<code>zinc-900</code>), sleek and responsive
                    </p>
                    <p className="text-zinc-400 mb-6">
                        PostX is a dynamic social platform where users can create, edit, like, and delete posts in real time.
                        Its UI is minimal yet functional, crafted for modern web experience.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <motion.a
                            href="https://postx-h4fi.onrender.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='bg-cyan-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-cyan-300 hover:-translate-y-1 transition duration-300 ease-in-out'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            🔗 Live Demo
                        </motion.a>
                        <motion.a
                            href="https://github.com/Yashgit3097/PostX/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-transparent border border-zinc-400 text-white px-6 py-2 rounded-full hover:bg-white/10 hover:-translate-y-1 transition duration-300 ease-in-out"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            📦 View Source
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Projects;
