import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography, Container} from '@mui/material'
import React from 'react';
import { Mail, Notifications, Pets, HouseIcon, Home, ShoppingCart, Person, People } from '@mui/icons-material';

import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    width:"100%"
});

const Icons = styled(Box)(({theme}) => ({
  display:"none",
  gap:"40px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }

}))

  


export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position='sticky' sx={{display: "flex", alignItems:"center", justifyContent:"center"}}>
        <Container maxWidth="xl" >
        <StyledToolbar disableGutters>
           
            <Icons>
              <Badge color="error">
                <Home/>
              </Badge>
              <Badge color="error">
                <ShoppingCart/> 
              </Badge>
              <Person onClick={(e) => setOpen(true)} sx={{width:30, height:30}} />
            </Icons>
        </StyledToolbar>
       </Container>
    </AppBar>
  )
}