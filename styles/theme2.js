import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme2 = createMuiTheme({
  palette: {
    primary: {
      main: '#F44336',
    },
    secondary: {
      main: '#1976D2',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#E5E5E5',
    },
  },
});

export default theme2;