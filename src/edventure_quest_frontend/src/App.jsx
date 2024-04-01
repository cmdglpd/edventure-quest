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

const brownBase = colors.hover;
const brownMain = colors.primary;

const brownLightBase = colors.hover;
const brownLightMain = colors.secondary;

const brownDarkBase = colors.hover;
const brownDarkMain = colors.tertiary;

let mode = "dark";


const theme = createTheme({
  typography: {
    fontFamily: [
      '"Segoe UI Print"',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    mode: mode,
    brown: {
      main: brownMain,
      light: alpha(brownBase, 0.5),
      dark: alpha(brownBase, 0.9),
      contrastText:
        getContrastRatio(brownMain, "#fff") > 4.5 ? "#fff" : "#111",
    },
    brownLight: {
      main: brownLightMain,
      light: alpha(brownLightBase, 0.5),
      dark: alpha(brownLightBase, 0.9),
      contrastText:
        getContrastRatio(brownLightMain, "#fff") > 4.5 ? "#fff" : "#111",
    },
    brownDark: {
      main: brownDarkMain,
      light: alpha(brownDarkBase, 0.5),
      dark: alpha(brownDarkBase, 0.9),
      contrastText:
        getContrastRatio(brownLightMain, "#fff") > 4.5 ? "#fff" : "#111",
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
    }
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

