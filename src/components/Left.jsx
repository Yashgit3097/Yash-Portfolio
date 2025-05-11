import React from 'react';
import image from '../assets/profileImage.jpg';

const Left = () => {
    return (
        <div className='flex justify-center items-center'>
            <img
                src={image}
                alt="Profile"
                className='
                    w-[300px] h-[300px] rounded-full shadow-2xl shadow-blue-700
                    hover:-translate-y-0.5 transition duration-300 ease-in-out
                    md:w-[400px] md:h-[500px] md:border-4 md:border-zinc-300
                '
            />
        </div>
    );
};

export default Left;
