'use client'
import Link from "next/link";
import { Input } from "./ui/input";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "../utils/animation";
import { MapPin, Phone, Mail, Globe, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <div className="bg-gray-700 text-white font-['Arial Rounded MT Bold', 'Arial', sans-serif]">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="space-y-4"
          >
            <h2 className="text-xl font-semibold uppercase md:mx-6">Corporate Office</h2>
            <div className="flex items-start space-x-2">
              <MapPin className="mt-1 flex-shrink-0" />
              <p className="text-sm sm:text-base">ROYAL CROWN INFRA<br />Shop No 1 Sector 25 Plot No 19,<br />
                Ravi Rachna, near Khandeshwar Station,<br />
                Sector-25, Khandeshwar,<br />
                Navi Mumbai, Maharashtra 410209</p>
            </div>
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="space-y-4"
          >
            <h2 className="text-xl font-semibold uppercase md:mx-16">Contact Us</h2>
            <div className="space-y-2 ml-2">
              <div className="flex items-center space-x-2">
                <Phone size={18} />
                <p className="text-sm sm:text-base">CALL US :  (+91) 8689992777</p>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle size={18} />
                <p className="text-sm sm:text-base">WHATSAPP :  (+91) 8689992777</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} />
                <p className="text-sm sm:text-base">EMAIL :   info@royalcrownreality.com</p>
              </div>
              <div className="flex items-center space-x-2">
                <Globe size={18} />
                <p className="text-sm sm:text-base">WEBSITE : www.royalcrown.in</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="space-y-4"
          >
            <h2 className="text-xl font-semibold uppercase md:mx-16">Quick Links</h2>
            <div className="flex flex-col space-y-2 ml-2 md:mx-20">
              <Link href='/about/ourteam' className="hover:underline text-sm sm:text-base">About Us</Link>
              <Link href='/projects' className="hover:underline text-sm sm:text-base">Projects</Link>
              <Link href='/gallery' className="hover:underline text-sm sm:text-base">Gallery</Link>
              <Link href='/contact' className="hover:underline text-sm sm:text-base">Contact</Link>
            </div>
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="space-y-4"
          >
            <h2 className="text-xl font-semibold uppercase">Connect With Us</h2>
            <div className="flex flex-col space-y-2 ml-2 md:mx-12">
              <Link href=' https://www.instagram.com/royalcrown.19/' className="hover:underline text-sm sm:text-base">Instagram</Link>
              <Link href='/' className="hover:underline text-sm sm:text-base">Twitter</Link>
              <Link href='/' className="hover:underline text-sm sm:text-base">LinkedIn</Link>
              <Link href='https://www.facebook.com/royalcrowninfra/' className="hover:underline text-sm sm:text-base">Facebook</Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={desVariants}
        className="py-6 bg-gray-800"
      >
        <div className="container mx-auto px-4 text-center md:flex md:justify-between md:items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm sm:text-base">&copy; 2024 Royal Crown Infra. All Rights Reserved</p>
          </div>
          <div className="space-x-4">
            <Link className="hover:underline text-sm sm:text-base" href='/'>Privacy Policy</Link>
            <Link className="hover:underline text-sm sm:text-base" href='/'>Terms of Service</Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}