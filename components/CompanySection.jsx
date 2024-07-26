'use client'
import React from 'react';
import Badge from "./Badge";
import { motion } from 'framer-motion';
import { desVariants, tagVariants, titleVariants } from '../utils/animation';

const CompanySection = () => {
    return (
        <div className="relative">
            <img src="/images/projectBackground.jpg" alt="City skyline" className="w-full h-96 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 opacity-70"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white text-center">
                    {[
                        { icon: "🏠", value: "300+", label: "Completed Projects" },
                        { icon: "👥", value: "400+", label: "Happy Customers" },
                        { icon: "🏢", value: "250+", label: "Property Sold" },
                        { icon: "👤", value: "150+", label: "Agents" }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={tagVariants}
                            className="bg-white bg-opacity-20 p-6 rounded-lg"
                        >
                            <div className="text-4xl mb-2">{item.icon}</div>
                            <div className="text-3xl font-bold mb-1">{item.value}</div>
                            <div className="text-sm">{item.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CompanySection;