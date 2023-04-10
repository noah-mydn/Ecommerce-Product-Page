import { Backdrop, Box, Dialog, IconButton } from '@mui/material';
import { IMAGES, thumbnail_images } from '../data/data';
import styled from '@emotion/styled';
import { theme } from '../theme/theme';
import React from 'react';

export const PopUpCarousel = ({ open, handleModalClose,index,setIndex,activeImageId, setActiveImageId,showActiveImage}) => {

    const thumbnails = [
        "<img src='./assets/image-product-1-thumbnail.jpg'",
        "<img src='./assets/image-product-2-thumbnail.jpg'",
        "<img src='./assets/image-product-3-thumbnail.jpg'",
        "<img src='./assets/image-product-4-thumbnail.jpg'"
    ]

    //Styled Dialog
    const CustomDialog = styled(Dialog)({
        margin:'0 auto',

        "& 	.MuiPaper-root": {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      });

    //Styled Image in Large View inside Slider
    const MainImage = styled(Box)({
        width:'50%',
        borderRadius:12,
        objectFit:'cover',
        margin:'0 auto',

      });

    //Styled Thumbnail Image
      const ThumbnailImage = styled(Box)({
        width:'55px',
        height:'55px',
        borderRadius:5,
        margin:'1.2em 0.6em',
    
      });

      //Navigation Functions
      const PrevIconButton= styled(IconButton)({
        padding:'0.5em',
        position:'absolute',
        top:220,
        left:130,
        background:'white',
        '&:hover':{
            background:theme.palette.secondary.light,
        }

      });

      const NextIconButton= styled(IconButton)({
        padding:'0.5em',
        position:'absolute',
        top:220,
        right:130,
        background:'white',
        '&:hover':{
            background:theme.palette.secondary.light,
        }

      });

      const switchImage = (direction) => {
        let newIndex;
        if(direction === 'prev') {
          newIndex = index === 0 ? IMAGES.length-1 : index-1;
        }
        else {
          newIndex = index === IMAGES.length-1 ? 0 : index+1;
        }
        setIndex(newIndex);
        setActiveImageId(thumbnail_images[newIndex]);
      };


      //Adding border effect to active image
      React.useEffect(() => {
        const currentImage = document.getElementById(thumbnail_images[index]);
        currentImage.classList.add('active-img');
      }, [index]);
      

  return (
    <>
      <Backdrop open={open} sx={{ zIndex: 100 }}>
        <CustomDialog
          aria-describedby='popup-dialog-for-large-image-view'
          aria-aria-labelledby='popup-dialog-for-large-image-view'
          fullWidth='true'
          maxWidth='sm'
          open={open}
          onClose={handleModalClose}
        >
            <Box component='img' src='./assets/icon-close-orange.svg' width='10px' 
            my={4} onClick={handleModalClose}
            marginLeft='auto' marginRight='9em' />
            <PrevIconButton onClick={()=>{switchImage('prev')}}>
                <Box component='img' src="./assets/icon-previous.svg" width='10px' height='12px'/>
            </PrevIconButton>
            <MainImage component='img' src={IMAGES[index]} />
            <NextIconButton onClick={()=>{switchImage('next')}}> 
                <Box component='img' src="./assets/icon-next.svg" width='10px' height='12px'/>
            </NextIconButton>
            <Box display='flex' justifyContent='center' alignItems='center'>
            {thumbnail_images.map((img)=> {
              return (
                <ThumbnailImage component='img' src={img} 
                key={img} id={img} 
                className={activeImageId === img ? 'active-img' : ''}
                onClick={(e)=>{showActiveImage(e)}}/>
              )
            })}
          </Box>
        </CustomDialog>
      </Backdrop>
    </>
  );
};
