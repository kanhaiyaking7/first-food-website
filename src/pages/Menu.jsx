import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { Mio } from '../data/data'

const Menu = () => {
  return (

    <>
    <Layout>
    <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
      {Mio.map((mop)=>(
        <Card sx={{maxWidth:'390px',display:'flex',m:2}}>
          <CardActionArea>
          <CardMedia sx={{minHeight:"400px"}} component={'img'} src={mop.image} alt={mop.name}/>
          <CardContent><Typography variant='h5' gutterBottom component={'div'}>
            {mop.name}

            
            </Typography></CardContent>
          </CardActionArea>
          </Card>
))}
    </Box>
    </Layout>
    
    </>
  
  )
}

export default Menu