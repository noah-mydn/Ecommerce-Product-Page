import styled from '@emotion/styled';
import { Box, IconButton } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import React from 'react'
import { ProductDescription } from '../components/ProductDescription';
import { theme } from '../theme/theme';

export const Product = ({smallScreen, mediumScreen}) => {

    const [index, setIndex] = React.useState(0);
    const [quantity, setQuantity] = React.useState(1);

    
  const IMAGES = ['./assets/image-product-1.jpg','./assets/image-product-2.jpg',
  './assets/image-product-3.jpg','./assets/image-product-4.jpg'];

  

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
      width: '95%',
      height: '300px',
      borderRadius: 8,
      objectFit: 'fill',
      display:mediumScreen ? 'none' : 'block',
  
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

const ImageSlider = styled(Box)({
  display:smallScreen ? 'block' : mediumScreen ? 'block' : 'none',
  width:smallScreen ? '100%' : mediumScreen ? '75%' : '',
  height:'320px',
  objectFit:'cover',
});


const CustomCarousel = styled(Carousel) ({
  width:'100%',
})

  return (
    <Container>
        <ImageContainer 
        id='product-main-images'>
          {/* <NavigateImgBtnPrev onClick={()=>{showProductSlideImages('previous')}}>
            <Box component='img' src='./assets/icon-previous.svg' width='8px' height='12px'/>
          </NavigateImgBtnPrev> */}
          <MainImage component='img' src={IMAGES[index]}/>
          <CustomCarousel NextIcon={<img src='./assets/icon-next.svg' width='8px' height='10px'/>}
                    PrevIcon={<img src='./assets/icon-previous.svg' widht='8px' height='10px'/>}
                    indicators={false}
                    animation='slide'
                    duration={1000}
                    navButtonsAlwaysVisible={true}
                    navButtonsProps={{
                      style:{
                        margin:'0.5em',
                        background:'white',
                        padding:'0.35em',
                      }
                    }}
                    >
                        {IMAGES.map((image)=> {
                          return (
                            <ImageSlider component='img' src={image} key={image}/>
                          )
                          
                        })}
                    </CustomCarousel>
          {/* <NavigateImgBtnNext onClick={()=>{showProductSlideImages('next')}}>
          <Box component='img' src='./assets/icon-next.svg' width='8px' height='12px'/>
          </NavigateImgBtnNext> */}
          <Box display={mediumScreen ? 'none': 'flex'} justifyContent='space-between' alignItems='center'>
            <ThumbnailImage component='img' src='./assets/image-product-1-thumbnail.jpg' />
            <ThumbnailImage component='img' src='./assets/image-product-2-thumbnail.jpg' />
            <ThumbnailImage component='img' src='./assets/image-product-3-thumbnail.jpg' />
            <ThumbnailImage component='img' src='./assets/image-product-4-thumbnail.jpg' />
          </Box>
        </ImageContainer>

        <ProductDescription 
        smallScreen={smallScreen} 
        mediumScreen={mediumScreen} 
        quantity={quantity}/>

    </Container>
  )
}
