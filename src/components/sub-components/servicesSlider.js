import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

import airFreightImage from "../../frieghtServices.webp";
import droneServicesImage from "../../droneServices.jpg";

const servicesData = [
  {
    title: "Air Freight Services",
    description:
      "At our Auto Service garage, we are fully appreciate how difficult occur it is for people to find.",
    imageUrl: airFreightImage,
    action: "Read More",
  },
  {
    title: "Drone Services",
    description:
      "These are unique and often they differ from one industry to the other. Our logistics expertise.",
    imageUrl: droneServicesImage,
    action: "Read More",
  },
  {
    title: "Air Freight Services",
    description:
      "At our Auto Service garage, we are fully appreciate how difficult occur it is for people to find.",
    imageUrl: airFreightImage,
    action: "Read More",
  },
  {
    title: "Drone Services",
    description:
      "These are unique and often they differ from one industry to the other. Our logistics expertise.",
    imageUrl: droneServicesImage,
    action: "Read More",
  },
  // Add more items here if needed
];

const ServicesSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // For devices with a screen width up to 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // For devices with a screen width up to 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  

  return (
     <Box sx={{ position: 'relative', width: '100%' }}>
    <Slider {...settings} >
      {servicesData.map((service, index) => (
        <Card
          key={index}
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            alignItems: "center",
            maxWidth: 550,
            height: 200,
            boxShadow: 3,
            borderRadius:0,
            transition: "transform .2s",
            "&:hover": {
              transform: "scale(1.05)",
            },
            ".slick-slide &": {
              display: "flex",
              flexDirection: "column",
            },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <CardMedia
              component="img"
              image={service.imageUrl}
              alt={service.title}
              sx={{
                width: 200,
                height: 200,
              }}
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {service.description}
              </Typography>
              <Button
                variant="contained"
                sx={{ width: "fit-content", marginTop: "auto" }}
              >
                {service.action}
              </Button>
            </CardContent>
          </Box>
        </Card>
      ))}
    </Slider>
    <Typography variant="subtitle1" marginTop={'40px'}>
        Logistics & Transport Solutions Saves Your Time. Finds Your Solutions
      </Typography>
    </Box>
  );
};

export default ServicesSlider;
