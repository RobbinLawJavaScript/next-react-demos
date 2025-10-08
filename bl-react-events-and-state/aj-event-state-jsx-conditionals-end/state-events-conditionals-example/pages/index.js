// Regular Expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

import { useState } from 'react'
import { MOVIE_LIST } from '../utils/movies'
import SimpleListItem from '../components/SimpleListItem'

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';

export default function Home() {
  const [search, setSearch] = useState("")
  const [year, setYear] = useState("")
  const [movies, setMovies] = useState(MOVIE_LIST)
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = (event) => {
    try {
      event.preventDefault()
      console.log(`year: ${year}`)
      console.log(`search: ${search}`)
      validateSearch()
      filterMovies()
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message)
    }
  }

  const validateSearch = () => {
    // We set the errorMessage to "" here so that
    // if all the validation tests pass no errors
    // will be thrown and the Alert will NOT show.
    setErrorMessage("")
    //if the year is empty
    if (year.trim().length === 0) {
      return
    }
    if (year.trim().length !== 4) {
      throw new Error(`"${year}" is not 4 digits`)
    }
    const numericRegEx = /^[0-9]+$/
    if (!numericRegEx.test(year)) {
      throw new Error(`"${year}" has non numeric digits`)
    }
    const currentYear = new Date().getFullYear();
    if((year < 1920) || (year > currentYear)) {
      throw new Error(`"${year}" is not in the range 1920 to ${currentYear}`)
    }
  }

  const filterMovies = () => {
    // make a copy of the movie list.
    let filteredMovieList = [...MOVIE_LIST]
    // check if the search is empty
    if (search.trim() !== ""){
      // loop through the movies and check if the name
      // includes the search value (both lower case)
      filteredMovieList = filteredMovieList.filter((movieData)=> {
       return movieData.name.toLowerCase().includes(search.trim().toLowerCase())
      })  
    }
    // check if the year is empty
    if (year.trim() !== ""){
      // loop through the movies and check if the year is the same as the 
      filteredMovieList = filteredMovieList.filter((movieData)=> {
       return movieData.year === parseInt(year.trim())
      })  
    }
    setMovies(filteredMovieList)
  }

  return (
    <main>
      <Container>
        <Typography variant="h2" component="h2" style={{textAlign: "center"}}>
          Movies
        </Typography>
        <form
          style={{width: '100%'}}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                id="search-field"
                label="search..."
                variant="standard"
                sx={{width: '100%'}}
                onChange={(e)=> {setSearch(e.target.value)}}
                value={search}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="year-field"
                label="year"
                variant="standard"
                sx={{width: '100%'}}
                onChange={(e)=> {setYear(e.target.value)}}
                value={year}
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                type="submit"
                variant="contained"
              >Filter</Button>
            </Grid>
            <Grid item xs={10}>
              {errorMessage  &&
                <Alert severity="error">{errorMessage}</Alert>
              }
            </Grid>
          </Grid>
        </form>
        <List sx={{width: `100%`}}>
          { movies.length === 0 &&
            <SimpleListItem text=" No results please search again." />
          }
          { movies.length === 0 ?
            <SimpleListItem text=" No results please search again." />
            :
            <SimpleListItem text={`${movies.length} movie results`} />
          }
          { movies.map((movieData, index)=> {
              return (
              <SimpleListItem
                key={index}
                text={`${movieData.name} (${movieData.year})`}
              />
              )
            })
          }
        </List>
      </Container>
    </main>
  )
}
