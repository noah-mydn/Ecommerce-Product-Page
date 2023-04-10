import styled from '@emotion/styled';
import { Badge, Box, Divider, Drawer, IconButton, Link, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../theme/theme';
import { Cart } from './Cart';

export const Navbar = (props) => {

    const NavTabs = ['Collections','Men', 'Women', 'About', 'Contact']; //NavTabs
    const [open, setOpen] = React.useState(false);  //For Drawer component
    const [anchorEl,setAnchorEl] = React.useState(null);   //For dialog
    const [isOnHover,setIsOnHover] = React.useState(false); //For cartIcon onHover state
    
    const {window} = props;
    const drawerWidth=220;

    const mediumScreen = props.mediumScreen;

    //Styled Navigation Component
    const NavLink = styled(Link)({
        textDecoration:'none',
        color:theme.palette.secondary.main,
        fontFamily:theme.typography.fontFamily,
        margin:'0 0.5em',
        position:'relative',
        padding:'40px 10px',

        '&:hover': {
            color:theme.palette.secondary.dark,
        },
        '&::before':{
            transition:'300ms',
            content:"''",
            position:'absolute',
            height: 0,
            width: '75%',
            bottom: 0,
            background:theme.palette.primary.main,
        },
        '&:hover::before': {
            height:'5px',
        }

    });

    //Styled Navigation for Mobile View
    const MobileNavList = styled(List)({
        marginTop:'1.5em',
        width:'100%',
    });

    //Styled Navigation Items for Mobile View
    const MobileNavListItem = styled(ListItem)({
        color:theme.palette.secondary.dark,
    });

    //Navigation Drawer function
    const toggleDrawer = () => {
        setOpen(!open);
    }

    //Cart Dialog
    const handleOpenCart = (event) => {
        setAnchorEl(event.currentTarget);
        setIsOnHover(true);
      };
      
    
      const handleCloseCart = () => {
        setAnchorEl(null);
      };


    
    const container = window !== undefined ? () => window().document.body : undefined;
    const openCart = Boolean(anchorEl);

    const mobileNav = (
        <Box>
            <Box component='img' src='./assets/icon-close.svg' width='15px' height='15px'
            ml={3} mt={4} onClick={toggleDrawer}/>
            <MobileNavList>
                {NavTabs.map((tab)=> {
                    return (
                    <MobileNavListItem key={tab}>
                        <ListItemText>
                            <Typography component='h6' variant='subtitle1' fontWeight='bolder'>
                                {tab}
                            </Typography>
                        </ListItemText>
                    </MobileNavListItem>
                    )
                    
                })}
            </MobileNavList>
        </Box>
    );

 

  return (
    <Box>
        <Box display='flex' justifyContent='space-between' alignItems='center' padding={mediumScreen ? '0.5em 0' : ''}>

                <IconButton sx={{display:{md:'none', xs:'inline-block', margin:'0 0.5em'}}}
                onClick={toggleDrawer}>
                    <Box component='img' src='./assets/icon-menu.svg' width='20px' height='15px'/>
                </IconButton>
                <Box component='img' src='./assets/logo.svg'
                width='130px' height='25px'
                sx={{marginRight:{md:'0',xs:'auto'}}}/>

                <Box marginRight='auto' marginLeft={4}
                sx={{display:{xs:'none',md:'inline'}}}>
                    {NavTabs.map((tab)=>{
                        return(
                            <NavLink href='#'>{tab}</NavLink>
                        )
                    })}
                </Box>

                <Box display='flex' justifyContent='space-around' alignItems='center'>
                {props.addedToCart ?
                <Badge badgeContent={props.addedToCart} color="primary">
                    <IconButton sx={{margin:'0 5px'}} onClick={handleOpenCart} 
                    onMouseEnter={() => setIsOnHover(true)}
                    onMouseLeave={() => setIsOnHover(false)}>
                        {isOnHover ? <img src='./assets/icon-cart-black.svg'/> : 
                                     <img src='./assets/icon-cart.svg'/>}
                    </IconButton>
                </Badge> :
                <IconButton sx={{margin:'0 5px'}} onClick={handleOpenCart}
                onMouseEnter={() => setIsOnHover(true)}
                onMouseLeave={() => setIsOnHover(false)}>
                    {isOnHover ? <img src='./assets/icon-cart-black.svg'/> : 
                                     <img src='./assets/icon-cart.svg'/>}
                </IconButton>
                }   



                    <Cart openCart={openCart} 
                          anchorEl={anchorEl} 
                          handleOpenCart={handleOpenCart} 
                          handleCloseCart={handleCloseCart} 
                          smallScreen={props.smallScreen} 
                          addedToCart={props.addedToCart}
                          setAddedToCart={props.setAddedToCart}/>

            
                        <Box component='img'
                        mx={1} src='./assets/image-avatar.png' 
                        className='hoverClass'/>
                
                </Box>
                

        </Box>
        <Divider sx={{
            display:{md:'block',xs:'none'},
            marginTop:'1.8em',
        }}/>
        <Drawer anchor='left'
        open={open}
        container={container}
        ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}>
            {mobileNav}
          </Drawer>
   </Box>
  )
}
