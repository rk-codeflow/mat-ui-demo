import './App.css';
import { Button, Stack, Typography, createTheme, ThemeProvider } from '@mui/material'
import { deepPurple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff4d4d'
    },
    secondary: deepPurple
  }
})
function App() {
  return (
    <ThemeProvider  theme={theme}>
      <div className="App">
        <h2>This is the tutorial of Material UI</h2>
        <Stack spacing={2}>
          <Stack spacing={4.9} direction="row">
            <Button variant='text'>Text Button</Button>
            <Button variant='contained'>Contained Button</Button>
            <Button variant='outlined'>Outlined Button</Button>
            <Button variant='text' color='error'>Error Button</Button>
            <Button variant='contained' color='primary'>Success Button</Button>
            <Button variant='contained' color='secondary'>Warning Button</Button>
          </Stack>
    
          <Typography variant="h1">h1 Heading</Typography>
          <Typography variant="h2">h2 Heading</Typography>
          <Typography variant="h3">h3 Heading</Typography>
          <Typography variant="h4">h4 Heading</Typography>
          <Typography variant="h5">h5 Heading</Typography>
          <Typography variant="h6">h6 Heading</Typography>
          <Typography variant="body 1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, voluptates.
          </Typography>
          <Typography variant="body 2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iusto, corrupti debitis tempora officia pariatur fuga, maiores a illum modi suscipit, enim culpa necessitatibus saepe quia quo assumenda id maxime!
          </Typography>
        </Stack>
      </div>
    </ThemeProvider>
  );
}

export default App;
