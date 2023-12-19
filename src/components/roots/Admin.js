import { Box, Container, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material'
import React from 'react'
import { COLORS, FONTS } from '../../styles/Theme'

function Admin() {
  return (
    <Box className="App">
      <Container maxWidth="lg" sx={{ minHeight: "100vh" }}>
        <Box sx={styles.container}>
          <Box sx={styles.sideBar}>
            <List>
              <ListItem sx={{ padding: 0 }}>
                <ListItemButton sx={{ color: COLORS.secondary }}>
                  <ListItemText sx={styles.itemText} primary="اعلانات" />
                </ListItemButton>
              </ListItem>
              <Divider sx={{ borderColor: COLORS.secondary }} />
              <ListItem sx={{ padding: 0 }}>
                <ListItemButton sx={{ color: COLORS.secondary }}>
                  <ListItemText sx={styles.itemText} primary="منو" />
                </ListItemButton>
              </ListItem>
              <Divider sx={{ borderColor: COLORS.secondary }} />
              <ListItem sx={{ padding: 0 }}>
                <ListItemButton sx={{ color: COLORS.secondary }}>
                  <ListItemText sx={styles.itemText} primary="رزروها" />
                </ListItemButton>
              </ListItem>
              <Divider sx={{ borderColor: COLORS.secondary }} />
              <ListItem sx={{ padding: 0 }}>
                <ListItemButton sx={{ color: COLORS.secondary }}>
                  <ListItemText sx={styles.itemText} primary="پیغام‌ها" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
          <Box sx={styles.mainBox}></Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Admin

const styles = {
  container: {
    mt: { sm: 10, xs: 2.5 },
    mb: 2.5,
    direction: "rtl",
    border: "3px solid",
    borderRadius: 5,
    borderColor: COLORS.secondary,
    bgcolor: COLORS.primary,
    height: 600,
    overflow: 'hidden',
  },
  sideBar: {
    width: 200,
    height: '100%',
    paddingTop: 2,
    borderLeft: "3px solid",
    borderColor: COLORS.secondary,
  },
  itemText: {
    '.MuiListItemText-primary': {
      fontFamily: FONTS.VZB,
      fontSize: 20,
      textAlign: 'right',
    }
  },
  mainBox: {},
}