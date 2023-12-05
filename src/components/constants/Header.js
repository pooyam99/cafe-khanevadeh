import React, { useState } from "react";
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, Stack, Typography } from "@mui/material";
import { COLORS, FONTS } from "../../styles/Theme";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const tabs = [
  {
    title: "صفحه اصلی",
    link: "/",
  },
  {
    title: "منو",
    link: "menu",
  },
  {
    title: "رزرو",
    link: "reserve",
  },
  {
    title: "تماس با ما",
    link: "contact",
  },
];

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Box
      sx={styles.container}
    >
      <Stack
        gap={2}
        sx={{ mr: 3, display: { sm: 'flex', xs: 'none' } }}
        direction="row"
        divider={
          <Box
            sx={{
              bgcolor: COLORS.secondary,
              opacity: 0.6,
              width: "2px",
              height: "15px",
              alignSelf: "center",
            }}
          />
        }
      >
        {tabs.map((item) => (
          <Link component={RouterLink} to={item.link} underline="none" color={COLORS.secondary}>
            <Typography sx={styles.tabs}>{item.title}</Typography>
          </Link>
        ))}
      </Stack>
      <Link to="/" sx={{ display: { sm: 'none', xs: 'flex' } }}>
        <img
          src={require("../../assets/logo-sm.png")}
          alt="Logo"
          width="80"
        />
      </Link>
      <Box display="flex" flexDirection="row-reverse">
        {isLoggedIn ?
          <Stack
            sx={styles.accountBox}
            gap={1}
            divider={<Box sx={styles.divider} />}
          >
            <Link component="button" underline="none" color={COLORS.secondary} sx={{ paddingLeft: 2.5, width: 80 }} onClick={() => setIsLoggedIn(false)}>
              <PersonIcon />
              <Typography sx={styles.loginText}>پنل کاربری</Typography>
            </Link>
            <Link component="button" underline="none" color={COLORS.secondary} sx={{ paddingRight: 2.5 }}>
              <ShoppingCartOutlinedIcon />
              <Typography sx={styles.loginText}>سبد سفارش</Typography>
            </Link>
          </Stack>
          :
          <Link component="button" underline="none" color={COLORS.secondary} sx={[styles.accountBox, styles.loginBox]} onClick={() => setIsLoggedIn(true)}>
            <PersonIcon />
            <Typography sx={styles.loginText}>ورود / ثبت‌نام</Typography>
          </Link>
        }
      </Box>
    </Box>
  );
};

export default Header;

const styles = {
  container: {
    mt: { sm: 10, xs: 2.5 },
    mb: 2.5,
    direction: "rtl",
    border: "3px solid",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: COLORS.secondary,
    bgcolor: COLORS.primary,
    padding: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: 'hidden',
  },
  tabs: {
    fontFamily: FONTS.VZB,
    fontSize: 20,
  },
  divider: {
    bgcolor: COLORS.primary,
    width: "3px",
    height: "100%",
    alignSelf: "center",
  },
  accountBox: {
    display: "flex",
    flexDirection: "row-reverse",
    borderRadius: 10,
    bgcolor: COLORS.bg,
    width: 180,
    height: 75
  },
  loginBox: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    fontFamily: FONTS.VZR,
    fontSize: 12,
  },
};
