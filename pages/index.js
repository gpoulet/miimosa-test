import Head from 'next/head'
import Projects from '../components/Projects'
import Container from '@material-ui/core/Container'

function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
      </Head>

      <Projects/>

    </Container>
  )
}


export default Home;