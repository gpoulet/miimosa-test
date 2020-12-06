import Head from 'next/head'
import Projects from '../components/Projects'
import { useQuery } from '@apollo/client'
import { ALL_PROJECTS_QUERY } from '../apollo'

function Home() {
  const projects = useQuery(ALL_PROJECTS_QUERY);

  return (
    <>
      <Head>
        <title>Miimosa Test - Accueil</title>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
      </Head>

      <Projects {...projects} />
    </>
  )
};


export default Home;