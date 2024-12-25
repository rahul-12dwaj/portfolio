"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const certifications = [
  {
    name: "MongoDB Tutorial",
    issuer: "Great Learning",
    date: "October 2024",
    details:
      "Gained foundational knowledge of MongoDB, including schema design, CRUD operations, and database optimization.",
  },
  {
    name: "React JS Tutorial",
    issuer: "Great Learning",
    date: "October 2024",
    details:
      "Learned the essentials of React.js, focusing on component-based architecture, state management, and building interactive user interfaces.",
  },
  {
    name: "SQL (Basic)",
    issuer: "HackerRank",
    date: "9th October, 2024",
    details: "Successfully cleared the HackerRank's skill certification test.",
    link: "https://www.hackerrank.com/certificates/55ff180078e5",
  },
];

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="certifications"
      ref={ref}
      className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Certifications
        </h2>
        <div className="max-w-3xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {cert.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-1">
                {cert.issuer}
              </p>
              <p className="text-gray-500 dark:text-gray-400 mb-2">
                {cert.date}
              </p>
              <p className="text-gray-700 dark:text-gray-200 mb-2">
                {cert.details}
              </p>
              {cert.link && (
                <a
                  href={cert.link}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certification
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
