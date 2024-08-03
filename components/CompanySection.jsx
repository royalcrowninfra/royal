'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CompanySection = () => {
    const statistics = [
        { startValue: 0, endValue: 72, label: "Successful Projects" },
        { startValue: 0, endValue: 36, label: "Years Of Expertise" },
        { startValue: 0, endValue: 1800, label: "Happy Families" },
        { startValue: 0, endValue: 18, label: "Million Sq.ft. Developed" }
    ];

    const [counts, setCounts] = useState(statistics.map(stat => stat.startValue));

    useEffect(() => {
        const duration = 2000;
        const frameRate = 1000 / 60;
        const totalFrames = duration / frameRate;

        const intervalIds = statistics.map((stat, index) => {
            const increment = (stat.endValue - stat.startValue) / totalFrames;
            let frame = 0;

            return setInterval(() => {
                frame++;
                if (frame <= totalFrames) {
                    setCounts(prevCounts => {
                        const newCounts = [...prevCounts];
                        newCounts[index] = Math.round(stat.startValue + increment * frame);
                        return newCounts;
                    });
                } else {
                    clearInterval(intervalIds[index]);
                }
            }, frameRate);
        });

        return () => intervalIds.forEach(id => clearInterval(id));
    }, []);

    return (
        <div className="bg-blue-800 w-full py-4">
            <div className="container mx-auto flex justify-between items-center text-white">
                {statistics.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="text-center px-4"
                    >
                        <div className="text-4xl font-bold mb-1">
                            {counts[index]}+
                        </div>
                        <div className="text-sm">
                            {item.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CompanySection;