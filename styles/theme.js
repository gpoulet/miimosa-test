import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00796B',
    },
    secondary: {
      main: '#FBC02D',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#E5E5E5',
    },
  },
});

export default theme;