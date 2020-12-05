import { useQuery } from "@apollo/client";
import { ALL_PROJECTS_QUERY } from '../apollo'
import Project from "./Project"

function Projects() {
  const { loading, error, data } = useQuery(ALL_PROJECTS_QUERY);

  if (error)
    return <div>Error loading players.</div>;
  if (loading)
    return <div>Loading</div>;

  const { projects } = data;
  console.log("projects :", projects)

  return (
    <div>
      {projects.map(project => <Project {...project} key={project.id} />)}
    </div>
  )
}

export default Projects;