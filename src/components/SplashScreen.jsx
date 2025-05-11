import React from 'react';

const SplashScreen = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black animate-zoomOut">
            <svg
                className="w-[60vw] h-[60vh]"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
            >
                <text
                    x="50"
                    y="55"
                    fontSize="50"
                    fontWeight="bold"
                    fill="white"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontFamily="Arial, sans-serif"
                >
                    YG
                </text>
            </svg>
        </div>
    );
};

export default SplashScreen;
