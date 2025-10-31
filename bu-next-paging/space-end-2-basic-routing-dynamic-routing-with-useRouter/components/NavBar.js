import {useState, useEffect} from 'react'

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'

import Link from 'next/link'

export default function NavBar(props) {

  useEffect(()=> {
    console.log(`NavBar; useEffect on mount`)
    return () => {
      console.log(`NavBar; useEffect on unMount`)
    }
  }, [])

  return (
  <Box sx={{ flexGrow: 1, marginBottom: 2}}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div"  sx={{ flexGrow: 1 }}>
          <Link href="/">
            Space-Agency-App
          </Link>
        </Typography>
        <Typography variant="h6" component="div" sx={{paddingRight: 4}}>
          <Link href="/about">
            About
          </Link>
        </Typography>
        <Typography variant="h6" component="div" sx={{paddingRight: 4}}>
          <Link href="/robbin">
            Robbin-Route
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  )
}