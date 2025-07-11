import { deepOrange, orange, teal, cyan } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  trello: {
    appBarHeight: "48px",
    boardBarHeight: "58px",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange,
      },
      // spacing: (factor) => `${0.25 * factor}rem`,
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange,
      },
      // spacing: (factor) => `${0.25 * factor}rem`,
    },
  },
});
