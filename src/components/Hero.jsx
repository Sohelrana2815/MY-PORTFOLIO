/* eslint-disable react/no-unescaped-entities */
import img from "../assets/pic.jpg";
const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={img}
        alt=""
        className="mx-auto h-48 mb-8 w-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Sohel Rana
        </span>
        , Junior MERN Stack Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I have built projects using React, Node.js, Express, and MongoDB, and I
        am always eager to learn and improve my skills. Let’s create something
        great together!
      </p>
      <div className="mt-8 space-x-4">
        <a
          href="https://drive.google.com/file/d/1nk3XS6LwySuFatqV2pzcwHtA1W9EmebM/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="bg-gradient-to-r from-blue-500 to-green-500 text-white
      transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
