import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

// Import image assets
import html from '../assets/html.webp';
import css from '../assets/css.png';
import js from '../assets/javascript.webp';
import node from '../assets/nodejs.png';
import react from '../assets/reactjs.png';

const Skills = () => {
    const skills = [
        { color: "#f5945c", img: html, name: 'HTML', progress: 90 },
        { color: "#3999d5", img: css, name: 'CSS', progress: 80 },
        { color: "#fad725", img: js, name: 'JavaScript', progress: 70 },
        { color: "#00dcf5", img: react, name: 'React', progress: 60 },
        { color: "#75ba75", img: node, name: 'Node.js', progress: 50 },
    ];

    return (
        <motion.div
            id="skills"
            className="w-full py-20 text-white relative min-h-screen bg-zinc-950 overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            once="true"
        >
            {/* Matching background glow (like Home.jsx) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-pink-500/5 to-cyan-500/10 blur-2xl pointer-events-none z-0" />

            <div className="mx-auto w-[95%] md:w-[90%] px-4 md:px-10 flex flex-col items-center relative z-10">
                <h1 className="text-4xl font-extrabold mb-12 text-cyan-300 tracking-wider">My Tech Stack</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full justify-items-center">
                    {skills.map((skill, index) => (
                        <Tilt
                            key={index}
                            tiltMaxAngleX={15}
                            tiltMaxAngleY={15}
                            glareEnable={true}
                            glareMaxOpacity={0.25}
                            scale={1.03}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, filter: "blur(6px)" }}
                                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                                className="w-full max-w-[300px] bg-zinc-800/70 backdrop-blur-md p-6 rounded-2xl border border-cyan-400/20 shadow-lg hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
                            >
                                <img
                                    className="w-[180px] h-[180px] object-contain mx-auto mb-4"
                                    src={skill.img}
                                    alt={skill.name}
                                />
                                <h2 className="text-xl font-bold mb-3 text-center text-cyan-300">{skill.name}</h2>
                                <div className="w-full h-2 bg-zinc-700 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.progress}%` }}
                                        transition={{ duration: 0.8, delay: index * 0.2 }}
                                        style={{ backgroundColor: skill.color }}
                                        className="h-full rounded-full"
                                    ></motion.div>
                                </div>
                                <p className="mt-2 text-center text-sm text-zinc-400">{skill.progress}% proficiency</p>
                            </motion.div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Skills;
