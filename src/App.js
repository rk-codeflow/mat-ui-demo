import './App.css';
import { Button, Stack, Typography, Container, ThemeProvider, Box } from '@mui/material'
import { theme } from './styles/Styles';

function App() {
  return (
    <div>
      <Stack spacing={2} p={2}>
        <Stack spacing={4.9} direction="row">
          <Button variant='contained' color='primary'>Primary Button Type 1</Button>
          <Button variant='outlined' color='secondary'>Secondary Button Type 1</Button>
          <Button variant='text' color='error'>Error Button Type 1</Button>
          <Button variant='contained' color='success'>Success Button Type 1</Button>
        </Stack>
  
        <ThemeProvider theme={theme}>
          <Stack spacing={4.9} direction="row">
            <Button variant='contained' color='primary'>Primary Button Type 2</Button>
            <Button variant='outlined' color='secondary'>Secondart Button Type 2</Button>
            <Button variant='text' color='error'>Error Button Type 2</Button>
            <Button variant='contained' color='success'>Success Button Type 2</Button>
          </Stack>
        </ThemeProvider>
  
        <Container> 
            <Typography variant='h4' gutterBottom>H4 heading</Typography>
            <Typography variant='body2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate quod tenetur adipisci in a porro ullam, magni repellendus nesciunt dolores alias laboriosam? Nulla reprehenderit provident in exercitationem officiis, doloribus dignissimos officia a voluptatibus dolore natus atque recusandae aspernatur reiciendis quibusdam praesentium eum delectus debitis quae! Unde aliquid tempora, iure laudantium provident aliquam magnam dolorum vero, ipsam sit eum, aspernatur doloribus! Suscipit quisquam necessitatibus, exercitationem aliquam alias deleniti! Provident, harum commodi tempora repudiandae necessitatibus debitis quisquam, est aliquam magni, hic aspernatur nemo dicta. Soluta earum quod quis libero nesciunt id vitae provident unde, voluptatem, amet aut natus dicta veniam minus ipsam?</Typography>
        </Container>

        <ThemeProvider theme={theme}>
          <Box sx={{
            height: 200,
            width: {
              xs: 200,
              sm: 400,
              md: 600,
            },
            backgroundColor: 'lightGreen'}}>
          </Box>
        </ThemeProvider>
      </Stack>
  </div>
  );
}

export default App;
