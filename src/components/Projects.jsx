import imgStudy from "../assets/web page images/stydy-flow.web.app_.png";
import imgProduct from "../assets/web page images/glow-mart-bd.web.app_.png";

const projects = [
  {
    id: 1,
    name: "Study Flow",
    image: imgStudy,
    github: "https://github.com/Sohelrana2815/study-flow-client",
    liveDemo: "https://stydy-flow.web.app/",
    description:
      "A user-friendly educational platform for managing tasks and assignments. Features include creating, updating, and prioritizing tasks, public assignment modifications, tracking submissions, and a comprehensive grading and feedback system for teachers and admins",
  },
  {
    id: 2,
    name: "Glow Mart BD",
    image: imgProduct,
    github: "https://github.com/Sohelrana2815/glow-mart-bd-client",
    liveDemo: "https://glow-mart-bd.web.app/",
    description:
      "An e-commerce platform offering a wide range of beauty and health care products, including cosmetics, skincare, and baby care items. The platform provides a seamless shopping experience with features like product management, user roles, advanced filtering, and easy purchasing",
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
              className="relative bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 w-full md:max-w-lg mx-auto"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                {/* Hover Icons */}
                <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="mx-2 text-white bg-gradient-to-r from-green-400 to-blue-500 p-2 rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-code"></i> {/* GitHub Code Icon */}
                  </a>
                  <a
                    href={project.liveDemo}
                    className="mx-2 text-white bg-gradient-to-r from-green-400 to-blue-500 p-2 rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-eye"></i> {/* Live Demo Eye Icon */}
                  </a>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-2">{project.technologies}</p>
              <p className="text-gray-300 mb-4">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
