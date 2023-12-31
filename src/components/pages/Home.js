import React, { useEffect, useState } from 'react'
import { Box, Typography, ImageList, ImageListItem, Stack } from '@mui/material';
import { COLORS, FONTS } from '../../styles/Theme';
import { itemData } from '../../assets/misc/ImgRef'

const Home = () => {
  const [NotifData, setNotifData] = useState([])

  useEffect(() => {
    const controller = new AbortController()
    const getData = async () => {
      try {
        const response = await fetch('http://localhost:4000/notifications', { signal: controller.signal })
        if (response.ok) {
          const result = await response.json()
          setNotifData(result)
        }
      } catch (error) {
        console.error(error)
      }
    }
    getData()
    return () => {
      controller.abort()
    }
  }, [])

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.welcome}>به کافه خانواده خوش آمدید</Typography>
      <Box sx={styles.mainBox}>
        <Box sx={styles.rightContainer} >
          <Box sx={styles.schedule}>
            <Typography sx={styles.title}>ایام و ساعات کاری</Typography>
            <Typography sx={styles.text}>
              هفت روز هفته؛<br />
              صبح از ساعت<Typography sx={[styles.text, { color: COLORS.secondary, display: 'inline' }]}>{` 7 الی 13`}</Typography>،<br />
              بعدازظهر از ساعت<Typography sx={[styles.text, { color: COLORS.secondary, display: 'inline' }]}>{` 16 الی 24`}</Typography>.
            </Typography>
          </Box>
          <Box sx={styles.notifBox}>
            <Typography sx={styles.title}>تابلو اعلانات</Typography>
            <Stack gap={1} sx={{ mt: 1 }}>
              {
                NotifData.length !== 0
                  ?
                  NotifData.map((item) => (
                    <Box sx={styles.notifItem}>
                      <Typography sx={styles.notifTitle}>{item.title}</Typography>
                      <Typography sx={styles.notifDesc}>{item.description}</Typography>
                    </Box>
                  ))
                  :
                  <Typography sx={[styles.text, { color: COLORS.darkGray }]}>
                    در حال حاضر اعلان اضطراری نداریم
                  </Typography>
              }
            </Stack>
          </Box>
        </Box>
        <Box sx={styles.leftContainer}>
          <ImageList sx={styles.imageList} gap={5} cols={2}>
            {itemData.map((item) => (
              <ImageListItem key={item}>
                <img
                  srcSet={item.img}
                  src={item.img}
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
  },
  rightContainer: {
    width: { sm: '49%', xs: '100%' },
    mb: { sm: 0, xs: 2 },
  },
  leftContainer: {
    width: { sm: '49%', xs: '100%' },
  },
  schedule: {
    flexDirection: 'column',
    border: '2px dashed',
    borderColor: COLORS.gray,
    borderRadius: 5,
    padding: 2,
    textAlign: 'center',
    mb: 2,
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
  notifBox: {
    display: 'flex',
    flexDirection: 'column',
    border: '2px dashed',
    borderColor: COLORS.secondary,
    borderRadius: 5,
    padding: { sm: 2, xs: 1 },
    textAlign: 'center',
  },
  notifItem: {
    flexDirection: 'row',
    border: '1px solid',
    borderColor: COLORS.lightGray,
    borderRadius: 4,
  },
  notifTitle: {
    fontFamily: FONTS.VZB,
    fontSize: 18,
    color: 'black',
    bgcolor: COLORS.lightGray,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    width: 'fit-content',
    paddingX: 1
  },
  notifDesc: {
    textAlign: 'right',
    fontFamily: FONTS.VZR,
    fontSize: { sm: 18, xs: 14 },
    color: COLORS.lightGray,
    lineHeight: 1.2,
    padding: 1
  },
  imageList: {
    width: '100%',
    height: '100%',
    margin: 0,
    borderRadius: 2.5
  },
};