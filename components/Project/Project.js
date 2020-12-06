import { string, number } from "prop-types"
import Money from '../Money'
import CardLink from '../CardLink'
import Title from '../Title'
import Photo from '../Photo'
import Card from "@material-ui/core/Card"
import CardContent from '@material-ui/core/CardContent'
import CardActions from "@material-ui/core/CardActions"

function Project({ id, title, collected, target, status }) {
  return (
    <Card className="projectCard">
      <Photo id={id} href={"/details/" + id} label={title} />
      <CardContent>
        <Title title={title}/>
        <Money collected={collected} target={target} status={status}/>
      </CardContent>
      <CardActions>
        <CardLink href={"/details/" + id} label="Découvrir le projet"/>
      </CardActions>
    </Card>
  )
}

Project.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  collected: number.isRequired,
  target: number.isRequired,
  status: string.isRequired,
  description: string.isRequired,
  imageUrl: string
};

export default Project;