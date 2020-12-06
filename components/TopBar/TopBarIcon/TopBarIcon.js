import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ArrowBack from '@material-ui/icons/ArrowBack';
import { useRouter } from 'next/router'
import Link from 'next/link'

function TopBarIcon() {
  const router = useRouter()
  return (
    <Link href="/">
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
      >
        {router.pathname === "/" ? <MenuIcon/> : <ArrowBack/>}
      </IconButton>
    </Link>
  )
}

export default TopBarIcon;