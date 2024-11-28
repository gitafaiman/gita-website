const projects = [
  { title: 'Project One', description: 'A great project', link: '#' },
  { title: 'Project Two', description: 'Another amazing project', link: '#' },
];

const Portfolio: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="p-4 border rounded shadow">
            <h2 className="text-xl font-bold">{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
