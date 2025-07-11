import React, { useEffect, useState } from 'react';

export default function Task4() {
    const rows = 8;
    const cols = 27;
    const totalBoxes = rows * cols;

    const [activeBoxes, setActiveBoxes] = useState([]);

    useEffect(() => {
        const RandomBoxes = () => {
            const count = 10;
            const randomIndexes = new Set();

            while (randomIndexes.size < count) {
                const rand = Math.floor(Math.random() * 10);
                randomIndexes.add(rand);
            }

            setActiveBoxes([...randomIndexes]);
        };

        RandomBoxes();
        const interval = setInterval(RandomBoxes, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-5 flex justify-center items-center min-h-screen bg-gray-200">
            <div
                className="grid gap-1"
                style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
            >
                {Array.from({ length: totalBoxes }).map((_, index) => (
                    <div
                        key={index}
                        className={`w-10 h-[70px] border border-gray-300 transition-all duration-500 ${activeBoxes.includes(index) ? 'bg-blue-600' : 'bg-gray-100'
                            }`}
                    ></div>
                ))}
            </div>
        </div>
    );
}
