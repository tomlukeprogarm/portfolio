import projectData from './ProjectData'

const Project = () => {
  

  return (
    <ul className="project-list">
      {projectData.map((project, index) => (
        <li className="project-list-item" key={index}>
          <div className="project-gallery">
            {project.imageURLs.map((imageURL, i) => (
              <img key={i} src={imageURL} alt={`Project ${index + 1} Image ${i + 1}`} />
            ))}
          </div>
          <p className='description'>{project.description}</p>
          <button><a href={project.github}>GITHUB REPO</a></button>
        </li>
      ))}
    </ul>
  );
};

export default Project;
