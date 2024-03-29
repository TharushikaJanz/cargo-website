import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import Img1 from "../../coworkers.jpeg";
import Img2 from "../../banner.jpeg";

const OverlappingImages = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "fit-content",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: '-60px',
        marginBottom: "20px",
        '&:hover img': {
            transform: "scale(1.05)", 
            transition: "transform 0.5s ease-in-out", 
          }
      }}
    >
      {/* Main Image */}
      <Box
        component="img"
        sx={{
          width: "auto",
          height: "320px",
          borderRadius: "0",
          boxShadow: 3,
          transition: "transform 0.5s ease-in-out",
          marginLeft: '10px'
        }}
        src={Img2}
        alt="Main Image"
      />
      {/* Overlay Image */}
      <Box
        component="img"
        sx={{
          width: "250px",
          height: "auto",
          position: "absolute",
          bottom: "-60px",
          left: "-175px",
          borderRadius: "0",
          boxShadow: 3,
          transition: "transform 0.5s ease-in-out",
        }}
        src={Img1}
        alt="Overlay Image"
      />
      {/* Info Box */}
      <Paper
        elevation={3}
        sx={{
          position: "absolute",
          bottom: "-40px", 
          right: "-80px", 
          bgcolor: "orange",
          color: "white",
          p: "1rem 1rem",
          borderRadius: "0px",
          boxShadow: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
          15,350+
        </Typography>
        <Typography variant="body2">Clients Worldwide</Typography>
      </Paper>
    </Box>
  );
};

export default OverlappingImages;
