/* reference for material ui components used
https://mui.com/material-ui/react-card/#media
*/
import {useState, useEffect} from 'react'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function DogCard(props) {
  console.log(`DogCard; mounting...`)

  useEffect(()=> {
    console.log(`DogCard; useEffect on mount`)
    return () => {
      console.log(`DogCard; useEffect on unMount`)
    }
  }, [])

  return (
  <Card sx={{ marginTop: "8px", maxWidth: 345 }}> 
    <CardMedia
      data-testid="dog-image"
      component="img"
      image={props.imageUrl}
      alt="green iguana"
    />
    <CardContent>
      <Typography variant="h5" component="div">
        {props.name}
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        onClick={props.buttonPressedCallBack}
        size="small"
      >
        Next
      </Button>
    </CardActions>
  </Card>
  )
}