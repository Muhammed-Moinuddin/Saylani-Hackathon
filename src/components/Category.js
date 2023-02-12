import React from "react";
import { Box, Stack, styled, Typography } from "@mui/material";

const StyledBox = styled(Box)({
  height: 200,
  width: "100%",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
});
const StyledTypography = styled(Typography)({
  margin: "25% 50px 25% 50px",
  background: "white",
  opacity: "0.8",
});
const Categories = () => {
  return (
    <Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        mt={5}
      >
        <StyledBox sx={{ backgroundImage: `url(https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWVhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1600&q=60)` }}>
          <StyledTypography align="center" variant="h3">
            Meat
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)` }}>
          <StyledTypography align="center" variant="h3">
            Vegetables
          </StyledTypography>
        </StyledBox>
        <StyledBox sx={{ backgroundImage: `url(https://images.unsplash.com/photo-1620189507195-68309c04c4d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWlsa3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1600&q=60)` }}>
          <StyledTypography align="center" variant="h3">
            Women
          </StyledTypography>
        </StyledBox>
      </Stack>
    </Box>
  );
};

export default Categories;