import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

const CustomSliderNav = ({
  currentSlide = 1,
  totalSlides = 2,
  onPrev,
  onNext,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f9bf04",
        padding: "10px 12px 10px 12px",
        position: "absolute",
        bottom: "0",
      }}
    >
      <Typography
        variant="body2"
        component="span"
        color="#fff"
        sx={{ margin: "0 8px" }}
      >
        {`${currentSlide} / ${totalSlides}`}
      </Typography>
      <IconButton
        onClick={onPrev}
        size="small"
        sx={{
          color: "#fff",

          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <WestIcon fontSize="small" />
      </IconButton>
      <IconButton
        onClick={onNext}
        size="small"
        sx={{
          color: "#fff",

          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <EastIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default CustomSliderNav;
