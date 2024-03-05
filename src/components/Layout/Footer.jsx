import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
     <>
   <Box sx={{textAlign:'center',bgcolor:'#1A1A19',color:'white',p:3}}>
    <Box sx={{my:3,"& svg":{fontSize:"60px",cursor:"pointer",mr:2}}}>
        <InstagramIcon></InstagramIcon>
        <TwitterIcon></TwitterIcon>
        <YouTubeIcon></YouTubeIcon>
    </Box>
    <Typography variant='h5'>
        All Right Reserved @:Kanhaiya king
    </Typography>
   </Box>
 
    </>
  )
}

export default Footer