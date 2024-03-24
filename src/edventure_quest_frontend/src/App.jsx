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

