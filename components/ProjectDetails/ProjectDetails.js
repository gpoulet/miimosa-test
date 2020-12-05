import { string, number, shape } from "prop-types"
import Description from '../Description'
import Status from '../Status'
import Title from '../Title'
import Money from '../Money'
import Card from "@material-ui/core/Card"
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

function ProjectDetails({ title, collected, target, status, user }) {
  const showParticipateButton = status === "in_progress"
  return (
    <Card className="projectCardDetails">
      <CardHeader
        avatar={<Avatar aria-label="recipe">{user.first_name[0]}</Avatar>}
        title={user.first_name}
        subheader={user.last_name}
        action={<Status status={status}/>}
      />
      <CardContent>
        <Title title={title}/>
        <Money collected={collected} target={target} status={status}/>
        <Description/>
      </CardContent>
      {
       showParticipateButton &&
      <CardActions>
        <Button size="small" color="primary">
          <a>Je veux participer</a>
        </Button>
      </CardActions>
      }
    </Card>
  )
}

ProjectDetails.propTypes = {
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
  })
};

export default ProjectDetails;

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