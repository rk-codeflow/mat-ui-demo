import { createTheme } from "@mui/material";

const Colors = {
  primary: '#00b5cc',
  secondary: '#4871f7',
  success: '#26c281',
  error: '#cf000f'
}

export const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    success: {
      main: Colors.success,
    },
    error: {
      main: Colors.error,
    }
  },

  // typography: {
  //   fontFamily: 'Michroma',
  //   fontWeightRegular: 400
  // },

  // This is useful if you want to apply a fully custom design system to Material UI's components.
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20
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

// https://www.programiz.com/javascript/library/array/join
export const headingFont = createTheme({
  typography: {
    fontFamily: [
      'Michroma', 'sans-serif'
    ].join(',')
  }
})

export const bodyFont = createTheme({
  typography: {
    fontFamily: [
      'Karla', 'sans-serif'
    ].join(',')
  }
})

