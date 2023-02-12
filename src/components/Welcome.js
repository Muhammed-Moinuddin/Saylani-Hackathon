import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Container, Button, Link} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../../src/logosaylani.png'
import SignIn from './SignIn';

const theme = createTheme();

export const Welcome = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <img src={logo} width="300px"/>
          <Typography component="h1" variant="h4" sx={{color:"#61B846", fontWeight:"800", mt:"10vh", mb:"1vh"}}>
            SAYLANI WELFARE
          </Typography>
          <Typography component="h1" variant="h6" sx={{color:"#024F9D", mb:"3vh", fontWeight: "bold"}}>
            ONLINE DISCOUNT STORE
          </Typography>
        </Box>
        <Link href="/signin"><Button
              fullWidth
              variant="contained"
              sx={{backgroundColor:"#61B846", mt: 6, mb: 2, pt: 1.5, pb: 1.5, fontWeight: "bolder", fontSize:"16px"}}
            >
              Get Started
            </Button></Link>
      </Container>
    </ThemeProvider>
    </>
  )
}
