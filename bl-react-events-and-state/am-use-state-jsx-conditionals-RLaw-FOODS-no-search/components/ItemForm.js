import { useState } from 'react'

import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';


export default function ItemForm({ setItems }) {
  const [itemTitle, setItemTitle] = useState('')
  const [datePosted, setDatePosted] = useState(dayjs(Date.now()))
  const [itemType, setItemType] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    try {
      event.preventDefault()
      validateForm()
      setItems((prevItems) => {
        console.log('prevItems')
        console.log(prevItems)
        let addToPrevItems = [
          {
            title: itemTitle,
            date_posted: datePosted.format('YYYY-MM-DD'),
            item_type: itemType,
          },
          ...prevItems
        ]
        console.log('newly built Items')
        console.log(addToPrevItems)
        return addToPrevItems
      })
      resetForm()
    } catch (error) {
      setError(error.message)
    }
  }

  const resetForm = () => {
    setItemTitle('')
    setDatePosted(dayjs(Date.now()))
    setItemType('')
  }

  const validateForm = () => {
    setError("")
    let errorMessage = ''
    if (itemTitle.trim().length <= 3) {
      errorMessage += "- Title must be at least 3 characters\n"
    }
    if (![
      "Fruit",
      "Vegetable",
      "Meat"
    ].includes(itemType)) {
      errorMessage += "- Type is required\n"
    }
    if (datePosted.isBefore(dayjs(Date.now()), 'day')) {
      errorMessage += "- Date Posted must be in the future\n"
    }
    if (errorMessage != ''){
      throw new Error(errorMessage)
    }
  }

  return (
    <form 
      onSubmit={handleSubmit}
    >
      <Typography
        variant="h4"
        sx={{ paddingTop: 2, paddingBottom: 2}}
      >
        Post a New Food Item 
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Title"
            fullWidth
            sx={{width: '80%'}}
            value={itemTitle}
            onChange={(event) => {
              setItemTitle(event.target.value)
              console.log('itemTitle = ', event.target.value)
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="item-type-select">Type</InputLabel>
            <Select
                labelId="item-type-select"
                label="Type"
                sx={{width: '80%'}}
                value={itemType}
                onChange={(event) => {
                  setItemType(event.target.value)
                  console.log("itemType = ", event.target.value)
                }}
            >
              <MenuItem value={""}>Please Select A Type below</MenuItem>
              <MenuItem value={"Fruit"}>Fruit</MenuItem>
              <MenuItem value={"Vegetable"}>Vegetable</MenuItem>
              <MenuItem value={"Meat"}>Meat</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              slotProps={{
                textField: {
                  id: 'date-posted-picker',
                },
              }}
              label="Date Posted"
              defaultValue={dayjs(Date.now())}
              sx={{width: '80%'}}
              value={datePosted}
              onChange={(newValue) => {
                setDatePosted(newValue)
                console.log('datePosted = ', newValue)
              }} 
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit">Submit new Item</Button>
        </Grid>
        <Grid item xs={12}>
          {error && <Alert severity="error">
            <AlertTitle>Validation Error</AlertTitle>
            <div style={{whiteSpace: 'pre-line'}}>{error}</div>
          </Alert>}
        </Grid>
      </Grid>
    </form>
  )
} 