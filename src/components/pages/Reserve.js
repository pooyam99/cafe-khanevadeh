import React from 'react'
import { Box, Typography } from '@mui/material';
import { COLORS, FONTS } from '../../styles/Theme';

const Reserve = () => {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.welcome}>رزرو</Typography>
    </Box>
  )
}

export default Reserve

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