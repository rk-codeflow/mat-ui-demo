import { createTheme } from "@mui/material";

const Colors = {
  primary: '#00b5cc',
  secondary: '#4871f7',
  success: '#26c281',
  error: '#cf000f'
}

// const buttonFont = createTheme({
//   typography: {
//     fontFamily: [
//       'Karla', 'sans-serif'
//     ].join(',')
//   }
// })

// const bodyFont = createTheme({
//   typography: {
//     fontFamily: [
//       'Michroma', 'sans-serif'
//     ].join(',')
//   }
// })

const theme = createTheme({
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

export default theme;
