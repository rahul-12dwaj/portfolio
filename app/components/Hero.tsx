"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTypingEffect } from "../hooks/useTypingEffect";

const Hero = () => {
  const typedText = useTypingEffect(
    [
      "Full Stack Web Developer",
      "MERN Stack Developer",
      "Node.js Developer",
      "UI/UX Designer",
    ],
    100,
    50,
    2000
  );

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900"
    >
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center ml-10 mr-10 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Hi, I&apos;m Rahul Bhardwaj
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 h-[40px]">
            <span className="inline-block min-w-[20px]">{typedText}</span>
            <span className="inline-block w-[3px] h-[30px] bg-blue-600 dark:bg-blue-400 ml-1 animate-blink"></span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-400 mb-8">
            Master&apos;s student in Computer Science with a passion for
            creating beautiful, functional, and user-friendly websites and
            applications.
          </p>
          <motion.a
            href="mailto:rahulbhardwaj4239@gmail.com"
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/rahulbhardwaj4239"
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 inline-block ml-4 mt-5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LinkedIn
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            <Image
              src="/hero-image.jpg"
              alt="Rahul Bhardwaj"
              layout="fill"
              objectFit="cover"
              className="rounded-full shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
