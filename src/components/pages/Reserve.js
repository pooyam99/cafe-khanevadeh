import React from 'react'
import { Box, Typography } from '@mui/material';
import { COLORS, FONTS } from '../../styles/Theme';

const Reserve = () => {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.reserve}>رزرو</Typography>
      <Box sx={styles.mainBox}>
        <Box sx={styles.rightContainer}>
          <Typography sx={styles.title}>سالن مبلمان</Typography>
          <img
            src={require('../../assets/images/reserve-page-placeholder-1.jpg')}
            alt='Sofa'
            width='100%'
            height='360'
            style={{ borderRadius: 15 }}
          />
          <Box sx={styles.rulesBox}>
            <Typography sx={[styles.title, { fontSize: 25 }]}>شرایط رزرو</Typography>
            <Typography sx={styles.text}>
              ● رزرو هزینه‌ای ندارد.<br />
              ● رزرو باید نهایتا تا روز قبل صورت گیرد.<br />
              ● رزور به‌صورت تلفنی امکان‌پذیر است (به پایین صفحه مراجعه کنید).<br />
              ● ساعات قابل رزرو: روز از ساعت ۹ الی ۱۲، شب از ساعت ۱۸ الی ۲۳.<br />
              ● رزرو دربست به همراه میز بیلیارد برای جشن تولد یا میهمانی خانوادگی امکان‌پذیر است.<br />
              ● درصورتی که تا ۳۰ دقیقه پس از ساعت موعود تشریف نیاورید، رزرو شما لغو شده و سالن در اختیاط مشتریان حضوری قرار خواهد گرفت.<br />
              ● درخواست تهیهٔ کیک تولد توسط کافه امکان‌پذیر است.
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.leftContainer}>
          <Typography sx={styles.title}>میز بیلیارد</Typography>
          <img
            src={require('../../assets/images/reserve-page-placeholder-2.jpg')}
            alt='Billiard'
            width='100%'
            height='360'
            style={{ borderRadius: 15 }}
          />
          <Box sx={styles.rulesBox}>
            <Typography sx={[styles.title, { fontSize: 25 }]}>شرایط رزرو</Typography>
            <Typography sx={styles.text}>
              ● رزرو هزینه‌ای ندارد.<br />
              ● رزرو فقط برای همان روز اما در تمامی ساعات روز امکان‌پذیر است.<br />
              ● رزرو نهایتا برای یک ساعت امکان‌پذیر است.<br />
              ● رزور به‌صورت تلفنی امکان‌پذیر است (به پایین صفحه مراجعه کنید).<br />
              ● ساعات قابل رزرو: شب از ساعت ۱۷ الی ۲۳.<br />
              ● رزرو دربست به همراه مبلمان برای جشن یا میهمانی خانوادگی امکان‌پذیر است.<br />
              ● درصورتی که تا ۱۰ دقیقه پس از ساعت موعود تشریف نیاورید، رزرو شما لغو شده و میز در اختیاط مشتریان حضوری قرار خواهد گرفت.<br />
            </Typography>
          </Box>
        </Box>
      </Box>
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
  },
  reserve: {
    textAlign: "center",
    fontFamily: FONTS.Entezar,
    fontSize: 40,
    color: COLORS.white,
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
  },
  leftContainer: {
    width: { sm: '49%', xs: '100%' },
  },
  title: {
    mt: -0.75,
    fontFamily: FONTS.Entezar,
    fontSize: 30,
    color: COLORS.lightGray,
    textAlign: 'center',
    mb: 1
  },
  text: {
    fontFamily: FONTS.VZR,
    fontSize: { sm: 18, xs: 15 },
    color: COLORS.lightGray,
  },
  rulesBox: {
    flexDirection: 'column',
    border: '2px dashed',
    borderColor: COLORS.gray,
    borderRadius: 5,
    padding: 2,
    marginY: 2,
  },
};