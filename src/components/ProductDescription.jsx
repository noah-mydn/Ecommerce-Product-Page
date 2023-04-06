import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../theme/theme'

export const ProductDescription = ({smallScreen,mediumScreen,quantity}) => {
  return (
    <Box id='product-description' flexDirection='column'
        sx={{width:mediumScreen ? '85%' : '47%',
            
            padding: mediumScreen ? '1em 1.5em' : 0}}>

          <Typography variant='caption' 
          paddingY={2}
          fontWeight='bolder' 
          color={theme.palette.primary.main} 
          textAlign='left'>
            SNEAKER COMPANY
          </Typography>

          <Typography variant='h5' 
          component='h5' 
          fontWeight='bolder' 
          textAlign='left' 
          paddingY={1} 
          width={mediumScreen ? '85%' :'60%'}>
            Fall Limited Edition Sneakers
          </Typography>

          <Typography variant={mediumScreen ? 'subtitle2' : 'caption'}
          paddingY={1}
          component='h6'
          width={smallScreen ? '100%' : mediumScreen ? '50%' : '70%'}
          color={theme.palette.secondary.main}>
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
          </Typography>

          <Box display='flex' justifyContent='space-between' alignItems='center'
          flexWrap='wrap' pr={2}>
          
              <Typography component='h6'
              display='inline-flex'
              variant='h6'
              flex={mediumScreen ? '0 0 50%' : '0 0 100%'}
              fontWeight='bolder'>
                $125.00
              

                <Typography component='caption'
                variant='caption'
                display='inline-flex'
                marginX={3}
                sx={{padding:'5px 8px',
                color:theme.palette.primary.main,
                borderRadius:1}}
                bgcolor={theme.palette.primary.light}>
                  50%
                </Typography>
              </Typography>

              <Typography component='body1'
              display={mediumScreen ? 'inline-flex' : 'block'}
              paddingY={1}
              variant='body1'
              fontWeight='bolder'
              sx={{textDecoration:'line-through',
                  color:theme.palette.secondary.light}}>
                  $250.00
              </Typography>
            </Box>
          
            <Box display='flex' alignItems='center' flexDirection={mediumScreen ? 'column' : 'row'}>
              <Box display='flex' justifyContent='space-between' alignItems='center' mt={2} mr={mediumScreen ? 0 :3} 
              sx={{padding:'0.9em'}}
              bgcolor={theme.palette.text.main} width={mediumScreen ? '90%' :'20%'} borderRadius={2}>
                <Box component='img' src='./assets/icon-minus.svg' width='10px' height='3px'/>
                <Typography component='body2' variant='body2' fontWeight='bolder '>{quantity}</Typography>
                <Box component='img' src='./assets/icon-plus.svg' width='10px' height='10px'/>
              </Box> 
              <Box mt={2} width={mediumScreen ? '100%' : 'auto'}>
                <Button
                sx={{
                  borderRadius: 2,
                  background:theme.palette.primary.main,
                  color:'white',
                  width:mediumScreen ? '100%' : 'auto',
                  fontWeight:'bolder',
                  textTransform:'none',
                  textAlign:'center',
                  padding:'0.8em 3.5em'
                }}>
                  <Box component='img' src='./assets/icon-cart-white.svg' width='15px' height='15px' mr={1}/>
                  Add to cart
                </Button>
              </Box>
            </Box>
        </Box>
  )
}
