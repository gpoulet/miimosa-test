import CardMedia from '@material-ui/core/CardMedia'
import { string } from 'prop-types'

function Photo({ id }) {
  return (
    <CardMedia
      style={{ height: 0, paddingTop: '40%' }}
      image={"/images/"+id+".png"}/>
  )
}

Photo.propTypes = {
  id: string
}

export default Photo;