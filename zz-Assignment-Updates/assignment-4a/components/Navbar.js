import {useState, useEffect} from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import {searchAuthor} from '../utils/api/authors'

export default function Navbar(props) {
    const [authors, setAuthors] = useState([])
    const [search, setSearch] = useState("")
    console.log(`search: ${search}`)
    if(authors.length == 0){
      console.log(`NO authors`)
    }
    else{
      authors.forEach((element) => {
        console.log(`authors: ${element.name}-${element.key}`)
      })
    }
    
    
    /* Bonus Add useEffect here listen to search changes
      and fetch from the "searchAuthor" api documented here
    */

    useEffect(()=> {
      const myFunc = async ()=> {
        try {
          if (search.length < 3) {
            return
          }
          const data = await searchAuthor(search)
          setAuthors(data.docs)
        } 
        catch(error) {
          console.log(`useEffect catch on searchAuthor: ${error.message}`)
        }
      }
      myFunc()
    }, [search])


    const changeAuthorKey = (newAuthorKey) => {
    
      /* Call your function with passed in via props here */ 
      
      if (!props.setAuthorKey) {
        return 
      }
      props.setAuthorKey(newAuthorKey)
    }


    return <AppBar position="relative" sx={{mb: '1rem'}}>
    <Toolbar>
      <Typography
        variant="h6"
        color="inherit"
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
      >
        Our Library
      </Typography>
      <Autocomplete
        freeSolo
        sx={{minWidth: '320px'}}
        onChange={(event, newValue)=> {
          if(newValue != null){
            changeAuthorKey(newValue.key)
          }
        }}
        getOptionLabel={(option) => {
          try{
            return `${option.name} (${option.key})`
          } catch(error) {
            console.log(`getOptionLabel catch: ${error.message}`)
          }
        }}
        options={authors}
        renderOption={(props, option) => {
          return (
          <Box key={option.key} component="li" {...props}>
            {option.name} - {option.key}
          </Box>
          )
        }}
        renderInput={(params) => {
          return (
          <TextField {...params}
            sx={{
              label: {
                color: "white"
              },
              input: {
                color: "white"
              }
            }}
            variant="outlined"
            value={search}
            onChange={(event)=> {setSearch(event.target.value)}}
            label="search"
          />
          )
        }}
      />
    </Toolbar>
  </AppBar>
}