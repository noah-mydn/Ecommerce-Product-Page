import styled from '@emotion/styled';
import { Box } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import React from 'react'
import { ProductDescription } from '../components/ProductDescription';
import { PopUpCarousel } from '../components/PopUpCarousel';
import { IMAGES } from '../data/data';

export const Product = ({smallScreen, mediumScreen,quantity,setQuantity, setAddedToCart}) => {

    const [currentActiveImg, setCurrentActiveImg] = React.useState(0);
    const [open, setOpen] = React.useState(false);

//Styled Component for UI
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
  width:mediumScreen ? '100%' : '',
  height:'320px',
  objectFit:'cover',
});

const CustomCarousel = styled(Carousel) ({
  width:'100%',
})

const handleModalClose = () => {
  setOpen(false);
}

const handleModalOpen = ()=> {
 setOpen(true);
}

//Add to cart handler functions

const productIncrement = () => {
  setQuantity(quantity+1);
}

const productDecrement = () => {
  setQuantity(quantity === 0 ? 0 : quantity-1);
}

const handleAddToCart = () => {
  setAddedToCart(quantity);
}


  return (
    <Container>
        <ImageContainer 
        id='product-main-images'>
          <MainImage component='img' src={IMAGES[currentActiveImg].mainImage} onClick={handleModalOpen}/>

          <PopUpCarousel 
          open={open} 
          handleModalClose={handleModalClose} 
          currentActiveImg={currentActiveImg}
          setCurrentActiveImg={setCurrentActiveImg}/>
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
          <Box display={mediumScreen ? 'none': 'flex'} justifyContent='space-between' alignItems='center'>
            {IMAGES.map((img,index)=> {
              return (
                <ThumbnailImage component='img' src={img.thumbnail} 
                key={img.thumbnail}
                className={currentActiveImg === index ? 'active-img' : ''}
                onClick={() => setCurrentActiveImg(index)}/>
              )
            })}
          </Box>
        </ImageContainer>

        <ProductDescription 
        smallScreen={smallScreen} 
        mediumScreen={mediumScreen} 
        productIncrement={productIncrement}
        productDecrement={productDecrement}
        quantity={quantity}
        handleAddToCart={handleAddToCart}/>

    </Container>
  )
}
