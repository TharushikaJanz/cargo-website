import React from "react";
import { Box, Typography, Divider, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const reasons = [
  "Dui ac hendrerit elementum quam ipsum auctor lorem",
  "Mauris vel magna a est lobortis volutpat",
  "Sed bibendum ornare lorem mauris feugiat suspendisse necque",
  "Nulla scelerisque dui hendrerit elementum quam",
];

const WhyChooseUs = () => {
  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      {reasons.map((reason, index) => (
        <React.Fragment key={index}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 2,
            }}
          >
            <Typography variant="body1" sx={{ flexGrow: 1 }}>
              {reason}
            </Typography>
            <IconButton
              edge="end"
              size="small"
              sx={{
                color: "white",
                backgroundColor: "#171717",
                "&:hover": {
                  backgroundColor: "darkgrey",
                },
                width: "28px",
                height: "28px",
                borderRadius: "0",
              }}
            >
              <AddIcon />
            </IconButton>
          </Box>
          {index < reasons.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default WhyChooseUs;
