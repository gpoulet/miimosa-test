import Project from "../Project"
import { useContext } from 'react'
import { ThemeContext } from '../CustomThemeProvider'
import HorizontalList from '../HorizontalList'
import Container from '@material-ui/core/Container'

function Projects({ loading, error, data }) {

  if (error)
    return <div>Error loading projects.</div>;
  if (loading)
    return <div>Loading</div>;

  const { projects } = data;

  const { themeName } = useContext(ThemeContext);
  if (themeName === "theme") {
    return (
      <Container maxWidth="lg">
        <HorizontalList>
          {projects.map(project => <Project {...project} key={project.id}/>)}
        </HorizontalList>
      </Container>
    );
  } else {
    return (
      <Container maxWidth="md">
      {projects.map(project => <Project {...project} key={project.id}/>)}
    </Container>
    );
  }
}

export default Projects;