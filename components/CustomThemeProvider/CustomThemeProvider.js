import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "../../styles/theme";
import theme2 from "../../styles/theme2";

const getThemeByName = (theme) => {
  return themeMap[theme];
}

const themeMap = {
  theme,
  theme2
};

export const ThemeContext = React.createContext(getThemeByName("theme"));

const CustomThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState("theme");
  const theme = getThemeByName(themeName);

  const updateTheme = () => setThemeName(themeName === "theme" ? "theme2" : "theme")

  return (
    <ThemeContext.Provider value={{themeName, updateTheme}}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
export default CustomThemeProvider;