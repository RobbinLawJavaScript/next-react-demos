import {useState, useEffect} from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function SimpleDetailsCard(props) {
  console.log(`SimpleDetailsCard; mounting...`)

  useEffect(()=> {
    console.log(`SimpleDetailsCard; useEffect on mount`)
    return () => {
      console.log(`SimpleDetailsCard; useEffect on unMount`)
    }
  }, [])

  return (
  <Card sx={{ minWidth: 200, margin: 2 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {props.title}
      </Typography>
      <Typography variant="h5" component="div">
        {props.description}
      </Typography>
      <Typography variant="body2">
        {props.subDescription}
      </Typography>
    </CardContent>
    {props.buttonCallback &&
      <CardActions>
        <Button size="small" onClick={props.buttonCallback}>{props.buttonName}</Button>
      </CardActions>
    }
  </Card>
  )
}
