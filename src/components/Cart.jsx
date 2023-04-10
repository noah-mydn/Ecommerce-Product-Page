import React from 'react'
import { Box, Button, Divider, IconButton, Popover, Typography } from '@mui/material';
import { theme } from '../theme/theme';
import styled from '@emotion/styled';

export const Cart = ({openCart,handleCloseCart,anchorEl,smallScreen,addedToCart,setAddedToCart}) => {

    //Styled Checkout Button
    const CheckOut = styled(Button)({
        background:theme.palette.primary.main,
        color:theme.palette.text.main,
        textTransform:'none',
        textAlign:'center',
        width:'100%',
        marginTop:'1.2em',
        borderRadius:8,
        padding:'0.6em 1em',
        '&:hover':{
            background:theme.palette.primary.main,
        }
    })


    return (
        <Popover sx={{marginTop:'1.5em'}}
        elevation={4}
        open={openCart}
        anchorEl={anchorEl}
        onClose={handleCloseCart}
        PaperProps={{
            style: { width: smallScreen ? '100%' : 'auto' },
          }}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}>
        <Box px={2} py={3}>
            <Typography component='body2' variant='body2' fontWeight='bolder'>Cart</Typography>
            <Divider sx={{marginY:'1.2em'}}/>
            
            {addedToCart ?
            <Box display='flex' justifyContent='space-between' flexDirection='column'>
                <Box display='flex' alignItems='center' justifyContent='space-between' flexDirection='row'>
                    <Box my={2} component='img' src='./assets/image-product-1-thumbnail.jpg' 
                    width='35px' height='35px' borderRadius={1} mx={smallScreen ? 0 : 1}/>

                    <Box display='flex' flexDirection='column' alignItems='start' mx={smallScreen ? 0 : 1}>
                        <Typography component='caption' variant='caption' sx={{color:theme.palette.secondary.main}}>
                            Fall Limited Edition Sneakers
                        </Typography>
                        <Typography component='caption' variant='caption' sx={{color:theme.palette.secondary.main}}>
                            $125.00 x {addedToCart} &nbsp;&nbsp;<span style={{fontWeight:'bolder', color:'#000'}}>
                                ${parseFloat(addedToCart*125).toFixed(2)}</span>
                        </Typography>
                    </Box>  

                    <IconButton onClick={()=>setAddedToCart(null)} mx={smallScreen ? 0 : 1}>
                        <Box component='img' src='./assets/icon-delete.svg' width='10px' height='13px'/>
                    </IconButton>
                    
                </Box>
                <CheckOut>Checkout</CheckOut>
            </Box> :
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <Typography p={8} component='caption' variant='caption'
                    sx={{color:theme.palette.secondary.main}}>
                        Your cart is empty.
                    </Typography>   
                </Box>
            }
        </Box>
        
      </Popover>
  )
}
