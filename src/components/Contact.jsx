import React from "react";
import profile from "../assets/profileImage.jpg";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Contact = () => {
    // ✅ WhatsApp redirect handler
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form reload

        // ✅ Get form values
        const email = e.target.email.value;
        const name = e.target.name.value;
        const message = e.target.message.value;

        // ✅ Customize this with your WhatsApp number in international format (without +)
        const phoneNumber = "917203977628";

        // ✅ Construct message for WhatsApp
        const fullMessage = `Hello, I'm ${name} (${email}).\n\nMessage: ${message}`;

        // ✅ Create WhatsApp URL
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;

        // ✅ Open WhatsApp in new tab
        window.open(whatsappURL, "_blank");
    };

    return (
        <motion.div
            id="contact"
            className="relative min-h-screen px-4 py-16 bg-zinc-950 text-white overflow-hidden flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-pink-500/10 rounded-3xl blur-3xl pointer-events-none" />

            {/* Profile + Heading */}
            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 flex flex-col items-center backdrop-blur-md bg-white/10 p-8 rounded-2xl shadow-lg border border-white/10"
                >
                    <img
                        src={profile}
                        alt="Profile"
                        className="w-40 h-40 rounded-full border-4 border-white/30 shadow-md mb-4"
                    />
                    <h1 className="text-4xl font-bold">Let's Connect</h1>
                    <p className="text-zinc-400 text-center mt-2 max-w-md">
                        Whether it's a quick chat or a big project, I'm all ears.
                    </p>
                </motion.div>
            </Tilt>

            {/* Contact Form */}
            <motion.form
                onSubmit={handleSubmit}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="w-full max-w-2xl bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/10 space-y-5"
            >
                <div className="flex flex-col sm:flex-row gap-4">
                    {/* ✅ Added name attributes to access input values */}
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="flex-1 bg-transparent border border-zinc-700 rounded-full px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                    <input
                        name="name"
                        type="text"
                        placeholder="Name"
                        className="flex-1 bg-transparent border border-zinc-700 rounded-full px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>

                <textarea
                    name="message"
                    rows="5"
                    placeholder="Your message..."
                    className="w-full bg-transparent border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                ></textarea>

                <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-500 font-semibold uppercase tracking-wider transition shadow-md cursor-pointer"
                >
                    Send Message
                </button>
            </motion.form>

            {/* Floating Info Cards */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-5xl"
                initial="hidden"
                whileInView="visible"
                transition={{ staggerChildren: 0.3 }}
            >
                {[
                    { title: "About", text: "Frontend Developer & UX Enthusiast", icon: "💻" },
                    { title: "Phone", text: "+91 7203977628", icon: "📞" },
                    { title: "Location", text: "Gujarat, India", icon: "📍" },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                        className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transform transition shadow-md"
                    >
                        <div className="text-4xl mb-2">{item.icon}</div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-zinc-400 mt-1">{item.text}</p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Contact;
