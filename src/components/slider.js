import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Button, Paper } from "@mui/material";
import sliderImage1 from "../sliderImage1.jpg";
import sliderImage2 from "../sliderImage2.jpg";
import CustomSliderNav from "./customSliderNav";

const slidesData = [
  {
    title: "Best Shipping Partner",
    description:
      "Amet, tempus egestas facilisis volutpat viverra molestie lobortis posuere meacenas...",
    imageUrl: sliderImage2,
    action: "Discover More",
  },
  {
    title: "Best Shipping Partner",
    description:
      "Amet, tempus egestas facilisis volutpat viverra molestie lobortis posuere meacenas...",
    imageUrl: sliderImage2,
    action: "Discover More",
  },
];

const SliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slidesData.length;

  const settings = {
    dots: false, // Disable default dots
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const handlePrev = () => {
    // Logic to go to the previous slide
  };

  const handleNext = () => {
    // Logic to go to the next slide
  };

  return (
    <Slider {...settings}>
      {slidesData.map((slide, index) => (
        <Box
          key={index}
          sx={{ display: "flex", width: "100%", height: "600px" }}
        >
          {/* Text content on the left */}
          <Box
            sx={{
              position: "absolute",
              top: "10%",
              left: "23%",
              zIndex: 2,
              padding: "20px",
              width: "425px",
              maxWidth: "425px",
              height: "450px",
              backgroundColor: "#fff",
              borderRadius: "0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: "5px",
              }}
            >
              <Typography
                variant="body"
                sx={{
                  fontWeight: "bold",
                  letterSpacing: "5px",
                  fontSize: "16px",
                }}
              >
                LOGISTIC
              </Typography>
            </Box>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: "bold",
                color: "#000",
              }}
            >
              Best Shipping
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: "bold",
                color: "#FF6F00",
                marginBottom: "20px",
              }}
            >
              Partner
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#333",
                marginBottom: "20px",
              }}
            >
              Amet, tempus egestas facilisis volutpat viverra molestie lobortis
              posuere meacenas...
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FF6F00",
                color: "#fff",
                padding: "10px 30px",
                textTransform: "none",
                boxShadow: "none",
                borderRadius: 0,
                "&:hover": {
                  backgroundColor: "#e69500",
                },
              }}
            >
              Discover More
            </Button>
          </Box>
          <CustomSliderNav
            currentSlide={currentSlide + 1}
            totalSlides={totalSlides}
            onPrev={handlePrev}
            onNext={handleNext}
            sx={{
              position: "absolute",
              bottom: "20px", // Adjust based on your layout
              right: "20px", // Adjust based on your layout
              backgroundColor: "yellow", // Use theme color or hex color
            }}
          />
          {/* Image on the right */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <img
              src={slide.imageUrl}
              alt={`Slide ${index + 1}`}
              style={{
                width: "60%",
                maxHeight: "600px",
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                width: "2%",
                maxHeight: "500px",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Typography
                fontWeight={"bold"}
                fontSize="14px"
                sx={{
                  transform: "rotate(-90deg)",
                  position: "absolute",
                  bottom: "0",
                  whiteSpace: "nowrap",
                }}
              >
                #CARGOTON LOGISTIC
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Slider>
  );
};

export default SliderComponent;
