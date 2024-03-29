import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Stack,
  IconButton,
  Link,
} from "@mui/material";
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  ArrowUpward as ArrowUpwardIcon,
} from "@mui/icons-material";
import news1 from "../assets/news1.jpeg";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/news3.webp";
import news4 from "../assets/news4.png";

const socialIcons = [
  { icon: <FacebookIcon />, bgColor: "#2c342e" },
  { icon: <TwitterIcon />, bgColor: "#2c342e" },
  { icon: <InstagramIcon />, bgColor: "#2c342e" },
  { icon: <LinkedInIcon />, bgColor: "#2c342e" },
];

const imageData = [
  { src: news1, alt: "Customer Service 1" },
  { src: news2, alt: "Customer Service 2" },
  { src: news2, alt: "Customer Service 2" },
  { src: news3, alt: "Customer Service 3" },
  { src: news4, alt: "Customer Service 4" },
  { src: news4, alt: "Customer Service 4" },
];

const linkData = [
  { href: "#", text: "Support Forums" },
  { href: "#", text: "Communication" },
  { href: "#", text: "FAQs" },
  { href: "#", text: "Privacy Policy" },
];

const CustomerServiceLinks = ({ links }) => (
  <Grid item xs={6} md={3}>
    <Typography variant="h6" fontSize={"20px"} fontWeight={"bold"} mb={"2rem"}>
      Customer Service
    </Typography>
    {links.map((link, index) => (
      <Link
        key={index}
        href={link.href}
        color="#a9b6ab"
        underline="hover"
        sx={{ display: "block", mt: index > 0 ? 1 : 0 }}
      >
        {link.text}
      </Link>
    ))}
  </Grid>
);

// Simplified Image Box Component
const ImageBox = ({ images }) => (
  <Box
    sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}
  >
    {images.map((image, index) => (
      <img
        key={index}
        src={image.src}
        alt={image.alt}
        style={{ width: "30%", height: "auto", margin: "0.5%" }}
      />
    ))}
  </Box>
);

const FooterSection = () => {
  return (
    <Box sx={{ bgcolor: "#5d6c82", color: "white", padding: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Newsletter Section */}
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography variant="h6" fontSize={"24px"} fontWeight={"bold"}>
                  Weekly Newsletter
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight={"bold"}
                  fontSize={"12px"}
                  sx={{ mb: 2 }}
                >
                  There are many variations of passages of lorem ipsum
                  available.
                </Typography>
              </Box>
              <Stack direction="row" spacing={1}>
                <TextField
                  label="Enter Your Mail"
                  variant="filled"
                  size="small"
                  sx={{
                    bgcolor: "white",
                    borderRadius: 1,
                    ".MuiFilledInput-input": { py: "10px" },
                  }}
                />
                <Button variant="contained" sx={{ bgcolor: "#f9bf04" }}>
                  SUBSCRIBE
                </Button>
              </Stack>
            </Box>
          </Grid>
          {/*Options*/}
          <Grid item xs={12} mt={"4rem"}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {/* Other Footer Content */}
              <Grid container spacing={4}>
                <Grid item xs={6} md={3}>
                  <Typography
                    variant="h6"
                    fontSize={"20px"}
                    fontWeight={"bold"}
                    mb={"2rem"}
                  >
                    About Us
                  </Typography>
                  <Typography variant="body2" color="#a9b6ab">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                  <Typography variant="body2" color="#a9b6ab" sx={{ mt: 1 }}>
                    📞 (+941) 123 456 789
                  </Typography>
                  <Typography variant="body2" color="#a9b6ab">
                    🏢 123 Main St, City, 12345
                  </Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Typography
                    variant="h6"
                    fontSize={"20px"}
                    fontWeight={"bold"}
                    mb={"2rem"}
                  >
                    Latest News
                  </Typography>
                  <Link
                    href="#"
                    color="#a9b6ab"
                    underline="hover"
                    fontSize={"14px"}
                  >
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem.
                  </Link>
                  <Typography variant="body2" color="#a9b6ab" fontSize={"12px"}>
                    5 Minutes Ago
                  </Typography>
                  <Link
                    href="#"
                    color="#a9b6ab"
                    underline="hover"
                    sx={{ mt: "1rem" }}
                    fontSize={"14px"}
                  >
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem.
                  </Link>
                  <Typography variant="body2" color="#a9b6ab" fontSize={"12px"}>
                    5 Minutes Ago
                  </Typography>
                </Grid>

                <CustomerServiceLinks links={linkData} />

                <Grid item xs={6} md={3}>
                  <Typography
                    variant="h6"
                    fontSize={"20px"}
                    fontWeight={"bold"}
                    mb={"2rem"}
                  >
                    Customer Service
                  </Typography>

                  <ImageBox images={imageData.slice(0, 3)} />
                  <ImageBox images={imageData.slice(3)} />
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* Social Media Icons */}
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "20px",
              }}
            >
              <Typography variant="body2">
                Copyright © 2021 All Rights Reserved. Site By Xteb®
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  {socialIcons.map((icon, index) => (
                    <IconButton
                      key={index}
                      color="inherit"
                      size="small"
                      sx={{ backgroundColor: icon.bgColor }}
                    >
                      {icon.icon}
                    </IconButton>
                  ))}
                </Stack>
                <IconButton
                  sx={{
                    marginLeft: "5rem",
                    color: "#fff",
                    bgcolor: "#f9bf04",
                    borderRadius: "0",
                    p: "10px",
                  }}
                  aria-label="back to top"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <ArrowUpwardIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FooterSection;
