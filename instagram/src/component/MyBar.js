import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import purple from '@material-ui/core/colors/purple';
import Button from '@mui/material/Button';
import firebase from "../back/firebase";
import {useNavigate} from 'react-router-dom';
import 'firebase/compat/auth';

const styles={
  but:{
    position: 'absolute', 
    right:'0%', 
    top: '20%',
    fontFamily: 'monospace',
    fontSize:"15px",
    width:"120px",
    
}
}

export default function MyBar(){
  let history = useNavigate();
  return (
    <AppBar position="static" sx={{bgcolor:purple[400]}} style={{opacity:"90%"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            noWrap
            variant="h6"
            component="a"
            href="/MyHome"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            instagram
          </Typography>
          <Box sx={{ flexGrow: 0 }} style={{position:"absolute",right:"15%"}}>
            <Typography >
              <Avatar alt="casey" src="https://images.unsplash.com/photo-1549388604-817d15aa0110" />
            </Typography>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/Myprofile"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            style={{position:"absolute",right:"10%"}}
          >
            profile
          </Typography>
          <Button onClick={click} style={styles.but}  variant="contained" sx={{bgcolor:purple[800]}}>
            <Typography
            noWrap
            variant="subtitle2"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>sign out</Typography>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
  function click(e){
    e.preventDefault();
    firebase.auth().signOut()
    .then(()=>{
        history('/');
    })
    .catch((error)=>{
        console.log(error.message);
    });
    
}
};
