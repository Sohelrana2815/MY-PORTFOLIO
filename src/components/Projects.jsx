import imgStudy from "../assets/web page images/stydy-flow.web.app_.png";
import bookMSImage from "../assets/admin-dashboard.png";

const projects = [
  {
    id: 1,
    name: "Study Flow",
    technologies: "MERN Stack",
    image: imgStudy,
    github: "https://stydy-flow.web.app/",
    liveDemo: "https://stydy-flow.web.app/",
  },
  {
    id: 2,
    name: "Blog App",
    technologies: "MERN Stack",
    image: bookMSImage,
    github: "https://github.com/YouafKhan1",
    liveDemo: "https://your-live-demo-link.com",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-4 md:px-8 lg:px-20 max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-6 justify-items-center items-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 w-full md:max-w-lg mx-auto"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <div className="flex justify-evenly">
                <a
                  href={project.github}
                  className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.liveDemo}
                  className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
