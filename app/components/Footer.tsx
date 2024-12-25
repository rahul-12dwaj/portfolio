import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2023 Rahul Bhardwaj. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/rahul-12dwaj" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/rahulbhardwaj4239" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

