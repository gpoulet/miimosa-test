import Head from 'next/head'
import Projects from '../components/Projects'
import Container from '@material-ui/core/Container'
import { useQuery } from '@apollo/client'
import { ALL_PROJECTS_QUERY } from '../apollo'

function Home() {
  const projects = useQuery(ALL_PROJECTS_QUERY);

  return (
    <Container maxWidth="sm">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
      </Head>

      <Projects {...projects} />

    </Container>
  )
};


export default Home;