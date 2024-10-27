const services = [
  {
    id: 1,
    title: "HTML",
  },
  {
    id: 2,
    title: "CSS",
  },
  {
    id: 3,
    title: "Tailwind CSS",
  },
  {
    id: 4,
    title: "JavaScript",
  },
  {
    id: 5,
    title: "React.js",
  },
  {
    id: 6,
    title: "Express",
  },
  {
    id: 7,
    title: "MongoDB",
  },
  {
    id: 8,
    title: "Node.js",
  },
];
const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-2 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <h3
                className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500"
              >
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
