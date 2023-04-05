// https://mui.com/material-ui/react-progress/#circular

import {useState, useEffect} from 'react'

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function LoadingCircle() {
  console.log(`LoadingCircle; mounting...`)

  useEffect(()=> {
    console.log(`LoadingCircle; useEffect on mount`)
    return () => {
      console.log(`LoadingCircle; useEffect on unMount`)
    }
  }, [])

  return (
  <Box sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem'
  }}
  direction="row"
  >
    <CircularProgress />
  </Box>
  )
}
