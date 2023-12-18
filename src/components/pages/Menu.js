import React from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material';
import { COLORS, FONTS } from '../../styles/Theme';
import { MenuData } from '../../assets/MenuData';
import CoffeeIcon from '@mui/icons-material/Coffee';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import LocalBarIcon from '@mui/icons-material/LocalBar';

const MenuLists = {
  coffees: MenuData.filter((item) => item.type === 'coffee'),
  chocolates: MenuData.filter((item) => item.type === 'chocolate'),
  foods: MenuData.filter((item) => item.type === 'food'),
  drinks: MenuData.filter((item) => item.type === 'drink'),
}

const Menu = () => {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.welcome}>منو</Typography>
      <Typography sx={styles.message}>قیمت‌ها به تومان می‌باشند</Typography>
      <Box sx={styles.mainBox}>
        <Grid container rowSpacing={4} columnSpacing={2}>
          <Grid item sm={6} xs={12}>
            <Box sx={{ display: 'flex', mb: 1 }}>
              <CoffeeIcon sx={{ fontSize: 40, color: 'white' }} />
              <Typography sx={styles.category}>قـــهـــوه بــــــار</Typography>
            </Box>
            <Stack gap={1}>
              {MenuLists.coffees.map((item) => (
                <Box sx={styles.menuItem}>
                  <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
                    <Typography sx={styles.menuItemTitle}>{item.title}</Typography>
                    {item.desc !== '' ? <Typography sx={styles.menuItemDesc}>({item.desc})</Typography> : null}
                  </Box>
                  <Typography sx={styles.menuItemPrice}>{item.price}</Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Box sx={{ display: 'flex', mb: 1 }}>
              <LocalCafeIcon sx={{ fontSize: 40, color: 'white' }} />
              <Typography sx={styles.category}>شـــکــــلات بــــــار</Typography>
            </Box>
            <Stack gap={1}>
              {MenuLists.chocolates.map((item) => (
                <Box sx={styles.menuItem}>
                  <Box sx={{ display: { sm: 'flex', xs: 'inline-block' }, gap: 0.5, alignItems: 'center' }}>
                    <Typography sx={styles.menuItemTitle}>{item.title}</Typography>
                    {item.desc !== '' ? <Typography sx={styles.menuItemDesc}>({item.desc})</Typography> : null}
                  </Box>
                  <Typography sx={styles.menuItemPrice}>{item.price}</Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Box sx={{ display: 'flex', mb: 1 }}>
              <LunchDiningIcon sx={{ fontSize: 40, color: 'white', ml: 0.4 }} />
              <Typography sx={styles.category}>غـــــذا و دســـــر</Typography>
            </Box>
            <Stack gap={1}>
              {MenuLists.foods.map((item) => (
                <Box sx={styles.menuItem}>
                  <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
                    <Typography sx={styles.menuItemTitle}>{item.title}</Typography>
                    {item.desc !== '' ? <Typography sx={styles.menuItemDesc}>({item.desc})</Typography> : null}
                  </Box>
                  <Typography sx={styles.menuItemPrice}>{item.price}</Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Box sx={{ display: 'flex', mb: 1 }}>
              <LocalBarIcon sx={{ fontSize: 40, color: 'white' }} />
              <Typography sx={styles.category}>نوشیدنی، بستنی و کیک</Typography>
            </Box>
            <Stack gap={1}>
              {MenuLists.drinks.map((item) => (
                <Box sx={styles.menuItem}>
                  <Box sx={{ display: { sm: 'flex', xs: 'inline-block' }, gap: 0.5, alignItems: 'center' }}>
                    <Typography sx={styles.menuItemTitle}>{item.title}</Typography>
                    {item.desc !== '' ? <Typography sx={styles.menuItemDesc}>({item.desc})</Typography> : null}
                  </Box>
                  <Typography sx={styles.menuItemPrice}>{item.price}</Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Menu

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
    mb: 0.5,
  },
  message: {
    textAlign: "center",
    fontFamily: FONTS.VZM,
    fontSize: 16,
    color: COLORS.lightGray,
    mb: { sm: 2, xs: 1 },
  },
  mainBox: {
    direction: "rtl",
  },
  category: {
    fontFamily: FONTS.VZB,
    fontSize: 25,
    color: COLORS.secondary,
  },
  menuItem: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "space-between",
    padding: '8px 15px',
    borderRadius: 10,
    bgcolor: COLORS.bg,
    boxShadow: '0 3px 15px 1px inset',
    borderBottom: '1px solid rgb(255, 255, 255, 0.2)'
  },
  menuItemTitle: {
    fontFamily: FONTS.YekanR,
    fontSize: 16,
    color: COLORS.white,
    textShadow: '2px 4px 5px black',
    wordWrap: 'initial',
  },
  menuItemDesc: {
    fontFamily: FONTS.YekanR,
    fontSize: 12,
    color: COLORS.gray,
    textShadow: '2px 4px 5px black',
  },
  menuItemPrice: {
    direction: 'ltr',
    fontFamily: FONTS.VZB,
    fontSize: 16,
    color: COLORS.secondary,
    textShadow: '2px 4px 5px black',
  },
};