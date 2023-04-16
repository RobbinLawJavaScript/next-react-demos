// https://mui.com/material-ui/react-progress/#circular

import {useState, useEffect} from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'

export default function Loading(props) {
  console.log(`Loading; mounting...`)

  useEffect(()=> {
    console.log(`Loading; useEffect on mount`)
    return () => {
      console.log(`Loading; useEffect on unMount`)
    }
  }, [])

  return (
  <Box display="flex" justifyContent="center" >
    <Box alignItems="center" justifyContent="center">
      <Typography
         m="auto"
        gutterBottom
      >
        {props.text}
      </Typography>
      <CircularProgress />
    </Box>
  </Box>
  )
}