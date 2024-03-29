import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

const statsData = [
  {
    number: "890",
    text: "Delivered packages",
  },
  {
    number: "137",
    text: "Countries covered",
  },
  {
    number: "740",
    text: "Tons of Goods",
  },
  {
    number: "600",
    text: "Satisfied Clients",
  },
];

const StatsSection = () => {
    return (
      <Container maxWidth="lg" sx={{ py: 4, alignContent: "center"}}>
        <Grid container spacing={2} justifyContent="space-around" alignItems="center">
          {statsData.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Box textAlign="center" position="relative">
                {/* Background larger number */}
                <Typography
                variant="h1"
                component="p"
                sx={{
                  fontWeight: "bold",
                  color: "rgba(255, 255, 255, 255)",
                  position: "absolute",
                  transform: "scale(2)",
                  zIndex: 1,
                  fontSize: "6rem",
                  textShadow: "2px 2px 10px rgba(0, 0, 0, 0.4)",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%) scale(1.5)",
                  opacity: 0.2,
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                {item.number}
              </Typography>
                {/* Foreground number and text */}
                <Box
                  position="relative"
                  zIndex="2"
                  display="flex"
                  flexDirection={{ xs: 'column', sm: 'row' }}
                  alignItems={{ sm: 'flex-end', xs: 'baseline' }}
                  justifyContent="center"
                >
                  <Typography
                    variant="h5"
                    component="p"
                    sx={{
                      fontWeight: "bold",
                      color: "darkblue",
                      fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                      lineHeight: 1,
                    }}
                  >
                    {item.number}
                  </Typography>
                  <Typography
                    component="p"
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      color: "darkblue",
                      textAlign: "left",
                      mt: { xs: 1, sm: 0 },
                      ml: { sm: 2 },
                      fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  };
  
  export default StatsSection;