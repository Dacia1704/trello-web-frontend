import { deepOrange, orange, teal, cyan } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange,
      },
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange,
      },
    },
  },
  cssVarPrefix: "mui",
  cssVariables: {
    colorSchemeSelector: "class",
  },
});
