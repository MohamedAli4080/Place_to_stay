import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material'

export const NavBar = () => {
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton sx={{mr:2}} size='large'   color="inherit" aria-label="open drawer" >
            <MenuIcon />
          </IconButton>

          <Box>
            <Typography variant='h6' sx={{flexgrow:1,display:{xs:'none',md:'block'}}}>
                you are welcom
            </Typography>

            <Typography variant='h6' sx={{flexgrow:1,display:{xs:'block',md:'none'}}}>
              YRW
            </Typography>
          </Box>
          
        </Toolbar>
      </AppBar>
    </Box>
   
    
  )
}
