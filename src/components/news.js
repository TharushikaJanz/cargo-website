import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Container,
  Box,
} from "@mui/material";
import news1 from "../assets/news1.jpeg";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/news3.webp";
import news4 from "../assets/news4.png";

const newsItems = [
  {
    date: "26",
    title: "Curabitur Lorem Quis",
    excerpt:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames turpis egestas. Aenean non donec...",
    image: news1,
    author: "Admin",
    commentsCount: "15",
  },
  {
    date: "27",
    title: "Curabitur Lorem Quis",
    excerpt:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames turpis egestas. Aenean non donec...",
    image: news2,
    author: "Admin",
    commentsCount: "15",
  },
  {
    date: "20",
    title: "Curabitur Lorem Quis",
    excerpt:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames turpis egestas. Aenean non donec...",
    image: news3,
    author: "Admin",
    commentsCount: "15",
  },
  {
    date: "21",
    title: "Curabitur Lorem Quis",
    excerpt:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames turpis egestas. Aenean non donec...",
    image: news4,
    author: "Admin",
    commentsCount: "15",
  },
  // ... more news items
];

const LatestNews = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: "2rem", marginBottom: "2rem" }}>
      <Box sx={{ marginBottom: "2rem", textAlign: "center" }}>
        <Typography
          variant="h5"
          fontWeight={"bold"}
          textTransform={"uppercase"}
          letterSpacing={"1.5px"}
          gutterBottom
        >
          LATEST NEWS
        </Typography>
        <Typography
          variant="subtitle1"
          textTransform={"uppercase"}
          fontWeight={"bold"}
          color="#ccccc0"
          fontSize={"14px"}
          letterSpacing={"1.5px"}
          sx={{ mb: 4 }}
        >
          Integer Congue Elit
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {newsItems.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                borderRadius: "0",
                overflow: "hidden",
                "&:hover": {
                  backgroundColor: "#00c1e3",
                  //   "& .MuiCardMedia-img": {
                  //     opacity: 0.5,
                  //   },
                  //   "& .date-badge": {
                  //     backgroundColor: "secondary.main", // Change the date badge color on hover if needed
                  //   },
                },
              }}
            >
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 175, height: 175 }}
                  image={item.image}
                  alt={item.title}
                />
                <Box
                  className="date-badge"
                  display="flex"
                  flexDirection={"column"}
                  alignContent={"center"}
                  justifyContent={"center"}
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    backgroundColor: "#343d36",
                    color: "black",
                    padding: "2px",
                    paddingX: "10px",
                  }}
                >
                  <Typography
                    variant="caption"
                    fontSize={"18px"}
                    color={"#fff"}
                    fontWeight={"bold"}
                  >
                    {item.date}
                  </Typography>
                  <Typography
                    variant="caption"
                    fontSize={"12px"}
                    color={"#fff"}
                    fontWeight={"bold"}
                  >
                    Nov
                  </Typography>
                </Box>
              </Box>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  textTransform={"uppercase"}
                  fontSize={"14px"}
                  fontWeight={"bold"}
                  mb={"1rem"}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  fontSize={"12px"}
                  fontWeight={"bold"}
                  mb={"1rem"}
                >
                  {item.author} | {item.commentsCount} comments
                </Typography>
                <Typography variant="body2">{item.excerpt}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LatestNews;
