import React from "react";
import { Box, Typography, Container } from "@mui/material";
import ServicesSlider from "./sub-components/servicesSlider";

const ServicesSection = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: "2rem 0" }}>
      {/* Title and subtitle */}
      <Box sx={{ marginBottom: "2rem", textAlign: "center" }}>
        <Typography variant="overline" display="block" gutterBottom fontWeight={'600'} color={'#8dbb44 '}>
          Real Solution, Real Fast!
        </Typography>
        <Typography variant="h4" gutterBottom fontWeight={'bold'}>
          Best Global Logistics Solutions.
        </Typography>
      </Box>
      <ServicesSlider />
      
    </Container>
  );
};

export default ServicesSection;
