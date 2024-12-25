'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const education = [
  {
    degree: "Master's in Computer Science",
    institution: 'Himachal Pradesh University (HPU), Shimla',
    year: '2023 - 2025 (Expected)',
    details: 'Currently pursuing',
  },
  {
    degree: 'Bachelor of Computer Applications (B.C.A.)',
    institution: 'Government Degree College, Chamba',
    year: '2020 - 2023',
    details: 'Graduated with a CGPA of 8.2/10',
  },
  {
    degree: 'Higher Secondary (12th Grade)',
    institution: 'GSSS Chaned, Chamba - HPBOSE',
    year: '2020',
    details: 'Scored 77%',
  },
  {
    degree: 'Secondary School (10th Grade)',
    institution: 'GSSS Chanhouta, Chamba - HPBOSE',
    year: '2018',
    details: 'Scored 84%',
  },
]

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" ref={ref} className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Education</h2>
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`mb-8 bg-gray-100 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300`}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{edu.degree}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-1">{edu.institution}</p>
              <p className="text-gray-500 dark:text-gray-400 mb-2">{edu.year}</p>
              <p className="text-gray-700 dark:text-gray-200">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

