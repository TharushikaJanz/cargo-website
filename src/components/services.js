import React from "react";
import { Box, Typography, Container } from "@mui/material";
import ServicesSlider from "./sub-components/servicesSlider";

const ServicesSection = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: "2rem 0" }}>
      {/* Title and subtitle */}
      <Box sx={{ marginBottom: "2rem", textAlign: "center" }}>
        <Typography variant="overline" display="block" gutterBottom>
          Real Solution, Real Fast!
        </Typography>
        <Typography variant="h3" gutterBottom>
          Best Global Logistics Solutions.
        </Typography>
      </Box>
      {/* Slider component with added padding for spacing */}
      <ServicesSlider />
      
    </Container>
  );
};

export default ServicesSection;
