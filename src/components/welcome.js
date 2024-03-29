import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import OverlappingImages from "./sub-components/overlappedImages";

const WelcomeSection = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: "2rem", position: "relative" }}>
      <Grid container spacing={2}>
        {/* Images container */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <OverlappingImages />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{ padding: "4rem", backgroundColor: "#fff", paddingX: "8rem" }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontWeight: "bold", color: "#FF6F00" }}
            >
              TransMax Logistics
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: "bold",
                color: "#FF6F00",
                marginBottom: "2rem",
              }}
            >
              Around the World
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginBottom: "1rem", color: "#666" }}
            >
              Transmax is the world's driving worldwide coordinations supplier —
              we uphold industry and exchange the worldwide trade of merchandise
              through land transport.
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginBottom: "3rem", color: "#666" }}
            >
              Our worth added administrations guarantee the progression of
              products proceeds consistently and supply chains stay lean and
              streamlined for progress.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FF6F00",
                color: "#fff",
                "&:hover": { backgroundColor: "#cc5200" },
                borderRadius: 0,
              }}
            >
              MORE ABOUT US
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WelcomeSection;
