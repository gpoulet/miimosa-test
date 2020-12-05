import { string } from 'prop-types'
import Link from 'next/link'
import Button from '@material-ui/core/Button'

function CardLink({ href, label }) {
  return (
    <Link href={href}>
      <Button size="small" color="primary">
        <a>{label}</a>
      </Button>
    </Link>
  )
}

CardLink.propTypes = {
  href: string.isRequired,
  label:string.isRequired
}

export default CardLink