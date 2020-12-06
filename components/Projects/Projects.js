import Project from "../Project"

function Projects({ loading, error, data }) {

  if (error)
    return <div>Error loading projects.</div>;
  if (loading)
    return <div>Loading</div>;

  const { projects } = data;

  return (
    <div>
      {projects.map(project => <Project {...project} key={project.id} />)}
    </div>
  )
}

export default Projects;