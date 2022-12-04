import './App.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Container from '@mui/material/Container';

// import { Button, Stack, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';


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
  
        {/* <Stack spacing={2} direction="row">
          <Button variant="contained" startIcon={<DeleteIcon />}>Delete</Button>
          <Button variant="contained" endIcon={<DeleteIcon />}>Delete</Button>
        </Stack> */}

        {/* <Typography variant="h1">h1 Heading</Typography>
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
        </Typography> */}

        <Stack spacing={4} direction="row">
          <Box sx={{height: 200, width: 300}}>
            <Card variant='outlined'>
              <CardMedia
                component="img"
                height="200"
                image="https://images.unsplash.com/photo-1571329681611-f7b1f294a930?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="h4">Card</Typography>
                <Typography variant="body 2">This is the normal design of Card with white background and black text with gibbirish text and random thing with action behaviour.</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant='contained' color='primary'>Share</Button>
                <Button size="large" variant='contained' color='success'>Learn More</Button>
              </CardActions>
            </Card>
          </Box>
          <Container maxWidth="sm">
            <Box sx={{ backgroundColor: 'lightgreen', height: '417px' }} />
          </Container>
        </Stack>
      </Stack>
    </div>
  );
}

export default App;
