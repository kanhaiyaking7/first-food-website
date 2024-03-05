import React from 'react'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import '../../styles/Headerstyle.css'

const Header = () => {
  return (
    <>
<Box>

  <AppBar component={"nav"} sx={{bgcolor:"black"}}>
    <Toolbar>
      <IconButton color='inherit'  edge="start">
      <MenuIcon ></MenuIcon>
      </IconButton>

<Typography color={'goldenrod'}
 variant='h6' 
 component={'div'}
 sx={{flexGrow:1}}>
 <FastfoodIcon/> My Resturant</Typography>
 <Box >
  <ul className='navigation'>
    <li><Link to={"/"} >Home</Link> </li>
    <li><Link to={"/Menu"} >Menu</Link> </li>
    <li><Link to={"/about"} >About</Link> </li>
    <li><Link to={"/contact"} >Contact</Link> </li>
  </ul>
 </Box>


    </Toolbar>
  </AppBar>
  
</Box>
    
   
    </>
  )
}

export default Header;