import CardMedia from '@material-ui/core/CardMedia'
import { string } from 'prop-types'
import Link from 'next/link'

function media(id, label) {
  return (
    <CardMedia
      title={label}
      style={{ height: 0, paddingTop: '40%' }}
      image={"/images/" + id + ".png"}/>
  )
}

function Photo({ id, label, href }) {
  if (href) {
    return (
      <Link href={href}>
        <a>
          {media(id, label)}
        </a>
      </Link>
    )
  } else {
    return (
      <>{media(id, label)}</>
    )
  }
}

Photo.propTypes = {
  id: string.isRequired,
  label: string.isRequired,
  href: string,
}

export default Photo;