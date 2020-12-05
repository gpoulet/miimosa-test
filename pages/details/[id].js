import { useRouter } from 'next/router'
import ProjectDetails from '../../components/ProjectDetails'
import { useQuery } from '@apollo/client'
import { ALL_PROJECTS_QUERY } from '../../apollo'
import Link from 'next/link'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const Details = () => {
  const router = useRouter()
  const { id } = router.query

  const { loading, error, data } = useQuery(ALL_PROJECTS_QUERY);

  if (error)
    return <div>Error loading players.</div>;
  if (loading)
    return <div>Loading</div>;

  console.log("data", data)
  const project = data.projects.find(project => project.id === id)

  return (
    <Container maxWidth="md">
      <ProjectDetails {...project} />
      <Grid container justify="center" className="backButtonContainer">

      <Link href="/" className="backButton">
        <Button variant="contained" color="secondary">
          <a>Retour</a>
        </Button>
      </Link>
      </Grid>
    </Container>
  )
}

export default Details;