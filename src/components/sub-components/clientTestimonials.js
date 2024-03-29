import { Typography, Paper, IconButton, useTheme, Box } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const ClientTestimonial = () => {
  const theme = useTheme();
  const testimonial = {
    quote:
      "Integer congue elit non semper laoreet sed lectus orci posuere nisl tempor eu felis ac mauris. Pellentesque urna lorem, integer vitae felis vel magna posuere du vestibulum. Nam rutrum congue diam. Aliquam malesuada mauris etrug met",
    author: "JOHN DEO",
    title: "Managing Director",
  };

  return (
    <Box position="relative" mb={4}>
      <Box
        sx={{
          width: 60,
          height: 50,
          bgcolor: "darkred",
          clipPath: "polygon(0 0, 80% 0%, 100% 100%, 0% 100%)",
          position: "absolute",
          top: "30%",
          left: "-3%",
          zIndex: 2,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            mb: 2,
            fontStyle: "italic",
            ":before": {
              content: "open-quote",
              fontSize: "4rem",
              position: "absolute",
              left: theme.spacing(1),
              top: theme.spacing(-1),
              color: theme.palette.grey[400],
            },
          }}
        />
      </Box>

      <Paper
        sx={{
          padding: theme.spacing(5),
          backgroundColor: theme.palette.grey[200],
          color: theme.palette.text.secondary,
          position: "relative",
          overflow: "hidden",
          paddingLeft: "5rem",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            mb: 2,
            fontStyle: "italic",
          }}
        >
          {testimonial.quote}
        </Typography>
      </Paper>
      <Box display={"flex"} justifyContent={"space-between"} marginTop={"2rem"}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <>
            <IconButton
             size="small"
              sx={{
                color: "grey",
                border: "1px solid grey",
                borderRadius: "0",
                "&:hover": {
                  backgroundColor: "transparent",
                  border: "1px solid darkgrey",
                },
              }}
            >
              <KeyboardArrowLeftIcon sx={{fontSize: '16px', fontWeight: 'bold'}} />
            </IconButton>
            <IconButton
            size="small"
              sx={{
                color: "grey",
                border: "1px solid grey",
                borderRadius: "0",
                "&:hover": {
                  backgroundColor: "transparent",
                  border: "1px solid darkgrey",
                },
              }}
            >
              <KeyboardArrowRightIcon sx={{fontSize: '16px', fontWeight: 'bold'}}/>
            </IconButton>
          </>
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: "bold",
              textAlign: "right",
            }}
          >
            {testimonial.author}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              display: "block",
              textAlign: "right",
            }}
          >
            {testimonial.title}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ClientTestimonial;
