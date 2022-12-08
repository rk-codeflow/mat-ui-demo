import { createTheme } from "@mui/material";

const Colors = {
  primary: '#00b5cc',
  secondary: '#4871f7',
  success: '#26c281',
  error: '#cf000f'
}

// https://www.programiz.com/javascript/library/array/join

export const buttonFont = createTheme({
  typography: {
    fontFamily: [
      'Karla', 'sans-serif'
    ].join(',')
  }
})

export const bodyFont = createTheme({
  typography: {
    fontFamily: [
      'Michroma', 'sans-serif'
    ].join(',')
  }
})

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
  // }
})

