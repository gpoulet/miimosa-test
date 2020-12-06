import Button from '@material-ui/core/Button'
import { useContext } from 'react';
import { ThemeContext } from '../CustomThemeProvider';

function UpdateThemeButton() {
  const {updateTheme} = useContext(ThemeContext);
  return (
    <div style={{ marginLeft: "auto" }}>
      <Button variant="contained" color="secondary" onClick={() => updateTheme('theme')}>
        Changer le thème
      </Button>
    </div>
  );
}

export default UpdateThemeButton;