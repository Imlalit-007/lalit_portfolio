function ProjectCard({ project }) {
  return (
    <div className='project-card'>
      <div className='card-img'>
        <img
          src={project.img}
          alt={project.img}
        />
      </div>
      <div className='card-info'>
        <p>{project.title}</p>
        <div className='tech'>
          <p>Technologies: </p>
          <div className='capsule'>
            {project.tech.map(el => (
              <span key={el.id}>{el.techName}</span>
            ))}
          </div>
        </div>
        <p className='card-des'>{project.des}</p>
        <div className='project-btns'>
          <a href={project.webLink}>
            <span>Live View</span>
          </a>
          <a href={project.sourceCode}>
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
