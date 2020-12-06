import Button from '@material-ui/core/Button'
import { useContext } from 'react';
import { ThemeContext } from '../CustomThemeProvider';

function UpdateThemeButton() {
  const changeTheme = useContext(ThemeContext);
  return (
    <div style={{ marginLeft: "auto" }}>
      <Button variant="contained" color="secondary" onClick={() => changeTheme('theme')}>
        Changer le thème
      </Button>
    </div>
  );
}

export default UpdateThemeButton;