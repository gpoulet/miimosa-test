import AppBar from '@material-ui/core/AppBar'
import TopBarIcon from './TopBarIcon'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import UpdateThemeButton from '../UpdateThemeButton/UpdateThemeButton'

function TopBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <TopBarIcon/>
        <Typography variant="h6">
          <Link href="/">
            <a>Miimosa Test</a>
          </Link>
        </Typography>
        <UpdateThemeButton/>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar