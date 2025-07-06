import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme} defaultMode="light" modeStorageKey="my-app-theme" colorSchemeSelector="class" attribute="class">
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
