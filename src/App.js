import styled from '@emotion/styled';
import { Box, ThemeProvider, useMediaQuery } from '@mui/material';
import './App.css';
import { Navbar } from './components/Navbar';
import { Product } from './page/Product';
import { theme } from './theme/theme';

function App() {

  const mediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const Container = styled(Box)({
    minHeight:'95vh',
    margin: mediumScreen ? '0' : '1.5em 2.5em 0 2.5em',
    padding: mediumScreen ? '0' : '0 2em',

    
  })

  return (
    <ThemeProvider theme={theme}>
      <Container minHeight='100vh'>
        <Navbar mediumScreen={mediumScreen}/>
        <Product smallScreen={smallScreen} mediumScreen={mediumScreen}/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
