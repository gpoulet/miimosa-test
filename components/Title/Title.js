import { string } from 'prop-types'
import Typography from '@material-ui/core/Typography'

function Title({ title }) {
  return (
    <Typography gutterBottom variant="h5" component="h2">
      {title}
    </Typography>
  )
}

Title.propTypes = {
  title: string.isRequired
}

export default Title