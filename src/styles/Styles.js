import { createTheme } from "@mui/material";

const colors = {
  primary: '#00b5cc',
  secondary: '#4871f7',
  success: '#26c281',
  error: '#cf000f'
}

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    success: {
      main: colors.success,
    },
    error: {
      main: colors.error,
    }
  },

  typography: {
      fontFamily: `Michroma, sans-serif`
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          fontFamily: `Karla, sans-serif`
        }
      }
    }
  },

  breakpoints: {
    values: {
      xs: 100,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1920
    }
  }
})

