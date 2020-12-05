import Typography from '@material-ui/core/Typography'
import { LOREM_IPSUM } from '../ProjectDetails/ProjectDetails.util'

function Description() {
  return (
    <Typography className="description">
      {LOREM_IPSUM}
    </Typography>

  )
}

export default Description