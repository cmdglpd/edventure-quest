import { useState } from 'react';
import { edventure_quest_backend } from 'declarations/edventure_quest_backend';

import "./App.css"
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";
import routes from "./routes";
import { ThemeProvider } from "@emotion/react";
import { createTheme, alpha, getContrastRatio } from "@mui/material/styles";
import colors from "./utils/colors";
import UserProvider from "./providers/UserProvider";

const blueBase = colors.primary;
const blueMain = colors.primary;

const blueLightBase = colors.secondary;
const blueLightMain = colors.secondary;
let mode = "dark";


const theme = createTheme({
  palette: {
    mode: mode,
    dionysusTheme: {
      main: "#E07A86",
      light: alpha("#E07A86", 0.5),
      dark: alpha("#E07A86", 0.9),
      contrastText:
        getContrastRatio("#E07A86", "#fff") > 4.5 ? "#fff" : "#111",
    },
    artemisTheme: {
      main: "#CF6D67",
      light: alpha("#CF6D67", 0.5),
      dark: alpha("#CF6D67", 0.9),
      contrastText:
        getContrastRatio("#CF6D67", "#fff") > 4.5 ? "#fff" : "#111",
    },
    heraTheme: {
      main: "#6E7699",
      light: alpha("#6E7699", 0.5),
      dark: alpha("#6E7699", 0.9),
      contrastText:
        getContrastRatio("#6E7699", "#fff") > 4.5 ? "#fff" : "#111",
    },
    hadesTheme: {
      main: "#9F91C8",
      light: alpha("#9F91C8", 0.5),
      dark: alpha("#9F91C8", 0.9),
      contrastText:
        getContrastRatio("#9F91C8", "#fff") > 4.5 ? "#fff" : "#111",
    },
    apolloTheme: {
      main: "#E56A4E",
      light: alpha("#E56A4E", 0.5),
      dark: alpha("#E56A4E", 0.9),
      contrastText:
        getContrastRatio("#E56A4E", "#fff") > 4.5 ? "#fff" : "#111",
    },
    demeterTheme: {
      main: "#8FE0E4",
      light: alpha("#8FE0E4", 0.5),
      dark: alpha("#8FE0E4", 0.9),
      contrastText:
        getContrastRatio("#8FE0E4", "#fff") > 4.5 ? "#fff" : "#111",
    },
    nikeTheme: {
      main: "#FFB95B",
      light: alpha("#FFB95B", 0.5),
      dark: alpha("#FFB95B", 0.9),
      contrastText:
        getContrastRatio("#FFB95B", "#fff") > 4.5 ? "#fff" : "#111",
    },
    aphroditeTheme: {
      main: "#FF8893",
      light: alpha("#FF8893", 0.5),
      dark: alpha("#FF8893", 0.9),
      contrastText:
        getContrastRatio("#FF8893", "#fff") > 4.5 ? "#fff" : "#111",
    },
    blue: {
      main: blueMain,
      light: alpha(blueBase, 0.5),
      dark: alpha(blueBase, 0.9),
      contrastText:
        getContrastRatio(blueMain, "#fff") > 4.5 ? "#fff" : "#111",
    },
    blueLight: {
      main: blueLightMain,
      light: alpha(blueLightBase, 0.5),
      dark: alpha(blueLightBase, 0.9),
      contrastText:
        getContrastRatio(blueLightMain, "#fff") > 4.5 ? "#fff" : "#111",
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "transparent",
        }
      }
    },
    MuiBox: {
      styleOverrides: {
        paper: {
          backgroundColor: "transparent",
        }
      }
    },
  }
});



function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <RouterProvider router={routes} />
        </ThemeProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;

