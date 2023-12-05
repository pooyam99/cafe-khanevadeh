import React from "react";
import "../../styles/App.css";
import { Link as RouterLink } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const Main = () => {
  return (
    <Box className="App">
        <Typography color='white'>Login</Typography>
        <RouterLink to='/'>Back to Main</RouterLink>
    </Box>
  );
};

export default Main;
