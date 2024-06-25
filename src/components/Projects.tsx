import React, { useEffect, useState } from 'react';
import { fetchProjects, fetchProjectById } from '../services/api';
import { Project } from '../models/Project';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetchProjects();
      setProjects(data.slice(0, 5)); // Fetch and display only the first 5 projects
    };
    getProjects();
  }, []);

  const handleProjectClick = async (id: number) => {
    const project = await fetchProjectById(id);
    setSelectedProject(project);
  };

  return (
    <div>
      <h1>Projects</h1>
      <p>this the the data fetched from JSONPlaceholder  rest fake api posts </p>
      <ul style={fetched_data}>
        {projects.map(project => (
          <li  key={project.id} onClick={() => handleProjectClick(project.id)}>
            {project.title}
          </li>
        ))}
      </ul>
      {selectedProject && (
        <div>
          <h2>Details</h2>
          <p><strong>Title:</strong> {selectedProject.title}</p>
          <p><strong>Description:</strong> {selectedProject.body}</p>
        </div>
      )}
    </div>
  );
};
let fetched_data ={

  cursor: 'pointer'
  }
  export default Projects;
