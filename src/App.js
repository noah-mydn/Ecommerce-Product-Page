import styled from '@emotion/styled';
import { Box, ThemeProvider, useMediaQuery } from '@mui/material';
import './App.css';
import { Navbar } from './components/Navbar';
import { Product } from './page/Product';
import { theme } from './theme/theme';
import React from 'react';

function App() {

  //AddToCart State
  const [quantity, setQuantity] = React.useState(0);
  const [addedToCart, setAddedToCart] = React.useState(null);

  //ScreenSize verification
  const mediumScreen = useMediaQuery(theme.breakpoints.down('md')); 
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const Container = styled(Box)({
    minHeight:'95vh',
    margin: mediumScreen ? '0' : '1.5em 2.5em 0 2.5em',
    padding: mediumScreen ? '0' : '0 2em',

    
  })

  return (
   
      <ThemeProvider theme={theme}> {/*MUI Custom Theme */}
        <Container minHeight='100vh'>
          <Navbar mediumScreen={mediumScreen} 
                  smallScreen={smallScreen} 
                  quantity={quantity} 
                  addedToCart={addedToCart}
                  setAddedToCart={setAddedToCart}/>

          <Product smallScreen={smallScreen} 
                   mediumScreen={mediumScreen} 
                   quantity={quantity} 
                   setQuantity={setQuantity}
                   setAddedToCart={setAddedToCart}/>
        </Container>
      </ThemeProvider>
  );
}

export default App;
