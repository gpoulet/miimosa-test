import { string, number, object, shape } from "prop-types"
import Card from "@material-ui/core/Card"
import CardContent from '@material-ui/core/CardContent'
import CardActions from "@material-ui/core/CardActions"
import Money from './Money'
import CardLink from './CardLink'
import Title from './Title'
import Photo from './Photo'

function Project({ id, title, collected, target, status, user }) {
  return (
    <Card className="projectCard">
      <Photo id={id} />
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
  imageUrl: string,
  user: shape({
    first_name: string.isRequired,
    last_name: string.isRequired
  }),
};

export default Project;

//
// "collected": 15000,
//   "description": "",
//   "id": "c6d6f6f9-07d8-4540-87a7-3b8ff8869f55",
//   "image_url": "",
//   "status": "success",
//   "target": 15000,
//   "title": "Bar smoothie Bio",
//   "user": {
//     "first_name": "Lancelot",
//     "last_name": "Little Finger"
// }