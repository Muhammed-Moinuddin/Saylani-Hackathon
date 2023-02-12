import SignIn from "./components/SignIn";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { Container, Box } from "@mui/material";
import { Stack } from "@mui/system";
import { Home } from "./components/Home";
import SignUp from "./components/SignUp"; 
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { Welcome } from "./components/Welcome";

function App() {
  return (
      <Container  maxWidth={false} disableGutters>
        <Stack>
        <UserAuthContextProvider>
        <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home/>
                  </ProtectedRoute>
                }
              />
              <Route path="/signin" element={<SignIn/>} />
              <Route path="/signup" element={<SignUp/>} />
              <Route path="/" element={<Welcome/>} />
            </Routes>
          </UserAuthContextProvider>
        </Stack>
      </Container>
  );
}

export default App;
