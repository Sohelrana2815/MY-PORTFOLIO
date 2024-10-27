/* eslint-disable react/no-unescaped-entities */
import AboutImage from "../assets/about.png";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="w-64  rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              Hi, I'm Sohel Rana, a junior MERN stack developer with a passion
              for building functional and user-friendly web applications. I have
              experience working with technologies like React, Node.js, Express,
              and MongoDB, as well as tools such as Git, Tailwind CSS, and
              Firebase. I enjoy tackling new challenges and constantly strive to
              enhance my skills. As a lifelong learner, I'm always excited to
              explore new technologies and grow as a developer. I'm ready to
              take on new opportunities and contribute to creating amazing web
              experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
