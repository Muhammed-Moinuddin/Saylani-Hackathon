import React from "react";
import {Stack} from '@mui/material';  
import { useNavigate } from "react-router";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useUserAuth } from "../context/UserAuthContext";
import { Navbar } from "./Navbar";
import { Mail, Notifications, Pets, HouseIcon, House } from '@mui/icons-material';
import { Container, Box } from "@mui/system";
import { Hero } from "./Hero";
import Categories from "./Category";
import RecipeReviewCard from "./RecipeReviewCard";
import AddBook from "./AddBook";
import BooksList from "./BookList";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/signin");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Container disableGutters maxWidth={false}>
      <Navbar />
      <Hero/>
      <Categories/>
      <RecipeReviewCard/>
      <AddBook/>
      <BooksList/>
        <Box flex={6}>
        {/* <div>
        Hello Welcome <br />
        {user && user.email}
      </div>
      <div>
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div> */}
        </Box>
      </Container>
  );
};


