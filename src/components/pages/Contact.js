import React from 'react'
import { Box, Typography } from '@mui/material';
import { COLORS, FONTS } from '../../styles/Theme';

const Contact = () => {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.welcome}>تماس با ما</Typography>
    </Box>
  )
}

export default Contact

const styles = {
  container: {
    direction: "rtl",
    border: "3px solid",
    borderRadius: 5,
    borderColor: COLORS.secondary,
    bgcolor: COLORS.primary,
    padding: { sm: 3, xs: 1 },
    alignItems: "center",
    justifyContent: "space-between",
    overflow: 'hidden',
  },
  welcome: {
    textAlign: "center",
    fontFamily: FONTS.Entezar,
    fontSize: 40,
    color: COLORS.white,
  },
};