import React from 'react';
import { Link } from 'react-scroll';

const Right = () => {
    return (
        <div className='w-full md:w-[600px] px-4'>
            <h1 className='text-3xl md:text-4xl font-bold mb-8 text-cyan-300'>
                Hello, I'm <span>Yash Gandhi</span>
            </h1>
            <p className='text-base md:text-lg mt-4 mb-3 text-gray-300'>
                I'm a software developer with a passion for creating beautiful and functional web applications.
            </p>
            <p className='text-base md:text-lg mt-2 mb-3 text-gray-300'>
                I love working with React, Node.js, and Tailwind CSS.
            </p>
            <p className='text-base md:text-lg mt-2 text-gray-300'>
                In my free time, I enjoy hiking, reading, and playing video games.
            </p>
            <div>
                <a href="/yashresume.pdf" download>
                    <button className='mt-4 bg-cyan-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-cyan-300 hover:-translate-y-1 transition duration-300 ease-in-out'>
                        Resume Download here
                    </button>
                </a>
            </div>

        </div>
    );
};

export default Right;
