import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import { COLORS, FONTS } from '../../styles/Theme';
import { Input, TextArea } from '../StyledComponents'

const Contact = () => {

  return (
    <Box sx={styles.container}>
      <Box>
        <Typography sx={styles.welcome}>تماس با ما</Typography>
        <Typography sx={styles.text}>
          برای تماس تلفنی یا تماس در فضای مجازی از اطلاعات درج‌شده در پایین صفحه استفاده کنید.<br />
          در غیر این صورت از طریق فرم زیر پیام خود را برای ما ارسال کنید.
        </Typography>
      </Box>
      <Box sx={styles.mainBox}>
        <Box sx={styles.rightContainer}>
          <form style={styles.messageForm}>
            <Input type='text' placeholder='نام' />
            <Input type='text' placeholder='شماره همراه' />
            <TextArea name='message' wrap='hard' placeholder='متن پیام' />
            <Button sx={styles.submitBtn}>ارسال پیام</Button>
          </form>
        </Box>
        <Box sx={styles.leftContainer}>
          <iframe
            title='map'
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3361.1567078014823!2d51.43182600000001!3d32.60200699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDM2JzA3LjIiTiA1McKwMjUnNTQuNiJF!5e0!3m2!1sen!2sde!4v1702203635026!5m2!1sen!2sde"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: 10 }}
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Contact

const styles = {
  container: {
    direction: 'rtl',
    border: "3px solid",
    borderRadius: 5,
    borderColor: COLORS.secondary,
    bgcolor: COLORS.primary,
    padding: { sm: 5, xs: 3 },
  },
  welcome: {
    textAlign: "center",
    fontFamily: FONTS.Entezar,
    fontSize: 40,
    color: COLORS.lightGray,
    lineHeight: 1.2,
  },
  text: {
    mt: 2,
    fontFamily: FONTS.VZR,
    fontSize: { sm: 18, xs: 15 },
    color: COLORS.lightGray,
    lineHeight: 1.5,
  },
  mainBox: {
    mt: 2,
    display: 'flex',
    flexDirection: { sm: 'row', xs: 'column' },
    justifyContent: 'space-between',
  },
  rightContainer: {
    width: { sm: '49%', xs: '100%' },
    mb: { sm: 0, xs: 2 },
    display: 'flex',
  },
  leftContainer: {
    height: '45vh',
    width: { sm: '49%', xs: '100%' },
  },
  messageForm: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  },
  submitBtn: {
    border: 'none',
    color: 'black',
    backgroundColor: COLORS.secondary,
    fontFamily: FONTS.VZB,
    fontSize: 13,
    height: 30,
    width: 100,
    borderRadius: '10px',
    "&:hover": {
      backgroundColor: COLORS.tertiary,
    },
  }
};
