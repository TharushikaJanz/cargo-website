import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  IconButton,
} from "@mui/material";
import ClientTestimonial from "./sub-components/clientTestimonials";
import WhyChooseUs from "./sub-components/whyChooseUs";

const TestamonialSection = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={10}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            fontWeight={"bold"}
            textTransform={"uppercase"}
            letterSpacing={"1.5px"}
            gutterBottom
          >
            TRUSTED CLIENTS
          </Typography>
          <Typography
            variant="body1"
            textTransform={"uppercase"}
            fontWeight={"bold"}
            color="#ccccc0"
            fontSize={"14px"}
            letterSpacing={"1.5px"}
            sx={{ mb: 4 }}
          >
            Lorem ipsum dolor sit amet consectetur
          </Typography>

          <ClientTestimonial />
        
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            fontWeight={"bold"}
            textTransform={"uppercase"}
            letterSpacing={"1.5px"}
            gutterBottom
          >
            WHY CHOOSE US
          </Typography>
          <Typography
            variant="body1"
            textTransform={"uppercase"}
            fontWeight={"bold"}
            color="#ccccc0"
            fontSize={"14px"}
            letterSpacing={"1.5px"}
            sx={{ mb: 4 }}
          >
            Lorem ipsum dolor sit amet consectetur
          </Typography>
          <WhyChooseUs />
        </Grid>
      </Grid>
    </Container>
  );
};

export default TestamonialSection;
