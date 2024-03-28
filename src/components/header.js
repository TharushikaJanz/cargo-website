import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  Box,
  IconButton,
} from "@mui/material";
import TableRowsIcon from "@mui/icons-material/TableRows";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const StyledButton = (props) => {
  const activeStyle = {
    borderColor: "transparent transparent transparent #FF6F00",
    borderWidth: "0 0 0 3px",
    borderRadius: 0,
    borderStyle: "solid",
    color: props.isActive ? "#B2B2B2" : "#000",
  };

  const containedStyle = {
    ...props.style,
    borderRadius: 0,
    color: "#fff", // Ensure text color for contained buttons is white
  };

  // Apply the containedStyle if variant is 'contained', otherwise apply the default or active styles
  const buttonStyle =
    props.variant === "contained"
      ? containedStyle
      : props.isActive
      ? activeStyle
      : { ...props.style, color: "#000" };

  return (
    <Button
      {...props}
      style={{
        ...buttonStyle,
        marginRight: "14px",
        fontWeight: 600,
        textTransform: "uppercase",
      }}
    />
  );
};

function Header() {
  const [active, setActive] = useState("Home");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" style={{ background: "#FFF", boxShadow: "none" }}>
      <Toolbar style={{ justifyContent: "space-between", flexWrap: "wrap" }}>
        <Typography
          variant="h6"
          style={{ color: "#FF6F00", fontWeight: "bold", flexGrow: 1 }}
        >
          CargoTon
        </Typography>
        {isMobile ? (
          <Box>
            <IconButton aria-label="Options" size="large">
              <TableRowsIcon fontSize="inherit" color="#000"/>
            </IconButton>
          </Box>
        ) : (
          <Box style={{ display: "flex", alignItems: "center" }}>
            <StyledButton
              isActive={active === "Home"}
              onClick={() => setActive("Home")}
              endIcon={<ArrowDropDownIcon />}
            >
              Home
            </StyledButton>
            <StyledButton
              isActive={active === "Pages"}
              onClick={() => setActive("Pages")}
              endIcon={<ArrowDropDownIcon />}
            >
              Pages
            </StyledButton>
            <StyledButton
              isActive={active === "Tracking"}
              onClick={() => setActive("Tracking")}
            >
              Tracking
            </StyledButton>
            <StyledButton
              isActive={active === "Services"}
              onClick={() => setActive("Services")}
              endIcon={<ArrowDropDownIcon />}
            >
              Services
            </StyledButton>
            <StyledButton
              isActive={active === "Blog"}
              onClick={() => setActive("Blog")}
              endIcon={<ArrowDropDownIcon />}
            >
              Blog
            </StyledButton>

            <StyledButton
              variant="contained"
              style={{ backgroundColor: "#FF6F00" }}
            >
              Get a Quote
            </StyledButton>
            <StyledButton
              variant="contained"
              style={{ backgroundColor: "#000" }}
            >
              Sign In
            </StyledButton>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
