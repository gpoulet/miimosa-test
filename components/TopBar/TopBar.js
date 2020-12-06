import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link'
import UpdateThemeButton from '../UpdateThemeButton/UpdateThemeButton'

function TopBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
        >
          <MenuIcon/>
        </IconButton>
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