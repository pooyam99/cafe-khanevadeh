import React from 'react'
import { Box, Typography, ImageList, ImageListItem } from '@mui/material';
import { COLORS, FONTS } from '../../styles/Theme';
import { itemData } from '../../assets/images/ImgRef'

const Home = () => {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.welcome}>به کافه خانواده خوش آمدید</Typography>
      <Box sx={styles.mainBox}>
        <Box sx={styles.rightContainer}>
          <Box sx={styles.schedule}>
            <Typography sx={styles.title}>ایام و ساعات کاری</Typography>
            <Typography sx={styles.text}>
              هفت روز هفته؛<br />
              صبح از ساعت<Typography sx={[styles.text, { color: COLORS.secondary, display: 'inline' }]}>{` 7 الی 13`}</Typography>،<br />
              بعدازظهر از ساعت<Typography sx={[styles.text, { color: COLORS.secondary, display: 'inline' }]}>{` 16 الی 24`}</Typography>.
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.leftContainer}>
          <ImageList sx={styles.imageList} gap={5} cols={2}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={require(item.img + "")}
                  src={require(item.img + "")}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
    </Box>
  )
}

export default Home

const styles = {
  container: {
    direction: "rtl",
    border: "3px solid",
    borderRadius: 5,
    borderColor: COLORS.secondary,
    bgcolor: COLORS.primary,
    padding: { sm: 3, xs: 1 },
  },
  welcome: {
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
    height: '60vh',
  },
  rightContainer: {
    width: { sm: '49%', xs: '100%' },
    mb: { sm: 0, xs: 2 },
  },
  schedule: {
    flexDirection: 'column',
    border: '2px dashed',
    borderColor: COLORS.gray,
    borderRadius: 5,
    padding: 2,
    textAlign: 'center',
  },
  title: {
    mt: -0.75,
    fontFamily: FONTS.Entezar,
    fontSize: 30,
    color: COLORS.lightGray,
  },
  text: {
    fontFamily: FONTS.VZR,
    fontSize: { sm: 18, xs: 15 },
    color: COLORS.lightGray,
    lineHeight: 1.2,
  },
  leftContainer: {
    width: { sm: '49%', xs: '100%' },
    overflow: 'hidden',
  },
  imageList: {
    width: '100%',
    height: '100%',
    margin: 0,
    borderRadius: 2.5
  }
};