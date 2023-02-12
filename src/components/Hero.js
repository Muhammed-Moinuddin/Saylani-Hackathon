import React from "react";
import { Box, Typography } from "@mui/material";
export const Hero = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z3JvY2VyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1600&q=60)`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 600,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "50%", md: "40%" },
            padding: { xs: 3, sm: 2, md: 20 },
          }}
        >
          <Box sx={{ background: "white", opacity: "0.8" }}>
            <Typography variant="h4" align="center" pt={8}>
              Saylani Welfare Discount Store
            </Typography>
            <Typography variant="body1" align="center" pb={8} color={"#024F9D"}>
              We love to help you
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

