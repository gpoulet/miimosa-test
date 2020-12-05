import { string } from 'prop-types'
import Chip from '@material-ui/core/Chip'
import { getColorFromStatus } from './Status.util'

function Status ({ status }) {
  return (
    <Chip className="statusChip" label={status} color={getColorFromStatus(status)} />
  )
}

Status.propTypes = {
  status: string.isRequired
}

export default Status