import './App.css';
import { Button, Stack } from '@mui/material'


function App() {
  return (
    <div className="App">
      <h2>This is the tutorial of Material UI</h2>
      <Stack spacing={2}>
        <Stack spacing={2} direction="row">
          <Button variant='text'>Text Button</Button>
          <Button variant='contained'>Contained Button</Button>
          <Button variant='outlined'>Outlined Button</Button>
          <Button variant='text' color='error'>Error Button</Button>
          <Button variant='contained' color='success'>Success Button</Button>
          <Button variant='outlined' color='warning'>Warning Button</Button>
        </Stack>
      </Stack>
    </div>
  );
}

export default App;
