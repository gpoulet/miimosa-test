import { useRouter } from 'next/router'
import ProjectDetails from '../../components/ProjectDetails'
import { useQuery } from '@apollo/client'
import { ALL_PROJECTS_QUERY } from '../../apollo'
import Link from 'next/link'

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

  return <>
    <ProjectDetails {...project} />
    <Link href="/">
      <a>Retour</a>
    </Link>
    </>
}

export default Details;