import React from 'react'
import './Home.css';
import AppBar from '@mui/material/AppBar';
import {Stack,Toolbar,Typography} from "@mui/material";
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
function Home() {
  return (
    <div className='navbar'>
      <AppBar position='static' sx={{backgroundColor:'blue',opacity:0.7}}> 
        <Toolbar>
        <HealthAndSafetyIcon sx={{height:40,width:40}}/> 
          <Typography variant="h6" sx={{fontWeight:'bold'}} >
             Headache Treatment
          </Typography>
          <Stack direction='row' spacing={2} className='button'>
           <Link to="/">
          <Button style={{color:'white'}} className='button1'>Home</Button></Link>
          <Link to="/Services"><Button style={{color:'white'}}className='button1'>Services</Button></Link>
          <Link to="/HIT6"><Button style={{color:'white'}}className='button1'>HIT-6</Button></Link>
          <Link to="/NPHQ"><Button style={{color:'white'}}className='button1'>NPHQ</Button></Link>
          <Link to="/Login"><Button style={{color:'white'}}className='button1' variant='contained'><AccountCircleIcon/>LOGIN</Button></Link>
          </Stack>
        </Toolbar>
      </AppBar>
      
    </div>
  )
}

export default Home



