/* eslint-disable react/no-unescaped-entities */
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkedAlt,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4"
            >
              Let's Connect
            </h3>
            <p className="lg:text-lg">
              I'm currently looking for new opportunities, my inbox is always
              open. Whether you have a question or just want to say hi, I'll try
              my best to get back to you!
            </p>
            <div className="flex  items-center mt-4 gap-4">
              <a
                href="https://www.linkedin.com/in/sohel-rana-93423a2ba/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="inline-block text-4xl text-green-400 mr-2"></FaLinkedin>
              </a>
              <a
                href="https://github.com/Sohelrana2815"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="inline-block text-4xl text-green-400 mr-2"></FaGithub>
              </a>
            </div>
            {/* Icons start */}
          <div className="flex items-center  mt-10 gap-4">
              <FaEnvelope className="text-green-500" />
              <a href="mailto:sohel152302@gmail.com">sohel152302@gmail.com</a>
            </div>
            <div className="flex items-center  mt-8 gap-4">
              <FaPhone className="text-green-500" />
              <p>+880 1998838992</p>
            </div>
            <div className="flex items-center  mt-8 gap-4">
              <FaMapMarkedAlt className="text-green-500" />
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                  placeholder="Enter You Name"
                />
              </div>
              <div>
                <label htmlFor="emial" className="block mb-2">
                  Email
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                  placeholder="Enter You Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                  rows="5"
                  placeholder="Enter You Message"
                />
              </div>
              <button
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
