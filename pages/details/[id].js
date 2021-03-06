import Head from 'next/head'
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
    return <div>Error loading project details.</div>;
  if (loading)
    return <div>Loading</div>;

  const project = data.projects.find(project => project.id === id)

  return (
    <>
      <Head>
        <title>Miimosa Test - Détails du project {project.title}</title>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
      </Head>
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
      </>
  )
}

export default Details;