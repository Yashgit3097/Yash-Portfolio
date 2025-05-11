import React from 'react';
import Left from './Left';
import Right from './Right';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt'; // Importing Tilt for parallax effect

const Home = () => {
    return (
        <motion.div
            id="home"
            className="relative w-full py-24 bg-zinc-950 text-white overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-pink-500/5 to-cyan-500/10 blur-2xl pointer-events-none z-0" />

            {/* Heading */}
            <motion.h1
                className="text-5xl font-extrabold text-cyan-300 text-center mb-20 relative z-10"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                Welcome to My Portfolio
            </motion.h1>

            {/* Content */}
            <div className="w-[90%] mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 relative z-10">
                {/* Tilted Left Side (Image - Zoom + Fade) */}
                <Tilt
                    tiltMaxAngleX={12}
                    tiltMaxAngleY={12}
                    glareEnable={true}
                    glareMaxOpacity={0.2}
                    scale={1.02}
                >
                    <motion.div
                        className="w-full lg:w-[500px] rounded-3xl overflow-hidden shadow-xl border border-white/10 backdrop-blur-md bg-white/5"
                        initial={{ opacity: 0, scale: 1.05 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.1, ease: 'easeInOut' }}
                    >
                        <Left />
                    </motion.div>
                </Tilt>

                {/* Tilted Right Side (Text - Skew + Fade) */}
                <motion.div
                    className="w-full lg:w-[600px] xl:w-[700px] bg-white/5 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/10"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                >
                    <Right />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Home;
