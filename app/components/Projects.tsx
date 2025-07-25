"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const projects = [
  {
    title: "Crime Report Management & FIR Tracking System",
    description:
      "A full-stack web application with FIR and Crime report Managing system.",
    image: "/amazone-clone.jpeg",
    link: "https://crimemanagement.onrender.com/",
    techStack: "MERN Stack",
  },
  {
    title: "School Website",
    description:
      "A full-stack web application with user registration and dynamic content updates.",
    image: "/school.jpeg",
    link: "https://lfps-chanhouta.web.app",
    techStack: "HTML, CSS, JavaScript, Node.js, MongoDB",
  },
  {
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio website showcasing projects and skills.",
    image: "/portfolio.jpeg",
    link: "https://myportfolio-da023.web.app",
    techStack: "HTML, CSS, JavaScript",
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Tech Stack: {project.techStack}
                </p>
                <a
                  href={project.link}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
