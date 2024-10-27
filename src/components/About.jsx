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
              for building functional and user-friendly web applications. I've
              worked on projects using technologies like React, Node.js,
              Express, and MongoDB, along with tools such as Git, Tailwind CSS,
              and Firebase. I enjoy tackling new challenges and constantly
              strive to improve my skills. As someone who believes in lifelong
              learning, I'm always excited to explore new technologies and grow
              as a developer. I'm ready to take on new opportunities and
              contribute to building amazing web experiences.
            </p>

            {/* <div className="mt-12 flex justify-between text-center">
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
                >
                  3+
                </h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
                >
                  50+
                </h3>
                <p>Projects Completed</p>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
                >
                  10+
                </h3>
                <p>Happy Clients</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
