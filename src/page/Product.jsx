import styled from '@emotion/styled';
import { Box, IconButton } from '@mui/material'
import React from 'react'
import { ProductDescription } from '../components/ProductDescription';

export const Product = ({smallScreen, mediumScreen}) => {

    const [Image, setImage] = React.useState('./assets/image-product-1.jpg');
    const [quantity, setQuantity] = React.useState(1);

    //Styled Components

    const Container = styled(Box)  ({
    
      width:'100%',
      display: mediumScreen ? 'block' : 'flex',
      justifyContent: 'space-evenly',
      alignItems:'center',
      flexDirection:'row',
      margin:mediumScreen ? 0 : '2em 1em',
      
    });
  
  const MainImage = styled(Box) ({
      width: mediumScreen ? '100%' :'95%',
      height: smallScreen ? '280px' : mediumScreen ? '450px':'300px',
      borderRadius: mediumScreen ? 0 : 8,
      objectFit: mediumScreen ? 'cover' : 'fill',
  
    });
  
  const ThumbnailImage = styled(Box)({
      width:'55px',
      height:'55px',
      borderRadius:5,
      margin:'1.2em 0.5em',
  
    });
  
  const ImageContainer = styled(Box) ({
      margin:mediumScreen ? '0' : '2em 0.5em',
      position:'relative',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column'
    });
  
  const NavigateImgBtn = styled(IconButton)({
        position:'absolute',
    });


  return (
    <Container>
        <ImageContainer 
        id='product-main-images'>
          <NavigateImgBtn></NavigateImgBtn>
          <MainImage component='img' src={Image}/>
          <NavigateImgBtn></NavigateImgBtn>
          <Box display={mediumScreen ? 'none': 'flex'} justifyContent='space-between' alignItems='center'>
            <ThumbnailImage component='img' src='./assets/image-product-1-thumbnail.jpg' />
            <ThumbnailImage component='img' src='./assets/image-product-2-thumbnail.jpg' />
            <ThumbnailImage component='img' src='./assets/image-product-3-thumbnail.jpg' />
            <ThumbnailImage component='img' src='./assets/image-product-4-thumbnail.jpg' />
          </Box>
        </ImageContainer>
        <ProductDescription smallScreen={smallScreen} mediumScreen={mediumScreen} quantity={quantity}/>
    </Container>
  )
}
