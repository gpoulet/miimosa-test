import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography'
import { number, string } from 'prop-types'
import { getColorFromStatus, getPercentValue, getProgressValue } from './Money.util'

function Money({ collected, target, status }) {
  let value = getProgressValue(collected, target)
  let percent = getPercentValue(collected, target)
  return (
    <>
      <Typography variant="body2" color="textSecondary" component="p">
        {collected + "€ collectés sur " + target + "€ (" + percent + "%)"}
      </Typography>
      <LinearProgress variant="determinate" value={value} color={getColorFromStatus(status)}/>
    </>
  )
}

Money.propTypes = {
  collected: number.isRequired,
  target: number.isRequired,
  status: string.isRequired
}

export default Money