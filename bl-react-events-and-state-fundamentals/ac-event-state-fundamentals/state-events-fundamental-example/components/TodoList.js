import {useState} from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function TodoList () {
  const [todoText, setTodoText] = useState("")
  const [allTodos, setAllTodos] = useState([])

  const onTodoTextChange = (event) => {
    console.log(event.target.value)
    //setTodoText(event.target.value)
  }

  const onAddTodoClick = () => {
    console.log("clicked")
    // create a new list that has allTodos and the new todos.
    //const newAllTodoList = [...allTodos, todoText]
    //console.log(newAllTodoList)
    // set the todoList
    //setAllTodos(newAllTodoList)
    // reset the value of the todo text.
    //setTodoText("")
  }

  return  (
  <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2" component="h2">
          Our Todo List
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <TextField
          id="standard-basic"
          label="New Todo"
          variant="standard"
          sx={{width: '100%'}}
          onChange={onTodoTextChange}
          value={todoText}
        />
      </Grid>
      <Grid item xs={2}>
        <Button
          variant="contained"
          onClick={onAddTodoClick}
        >Add Todo</Button>
      </Grid>
      <Grid item xs={12}>
        Current input text: {todoText} <br/>
        Current TodoList: {allTodos.toString()}
      </Grid>
      <List sx={{width: `100%`}}>
        {allTodos.map((todoItem, index)=> {
          return (
          <ListItem key={index}>
            <ListItemText>
              <Typography variant="p" component="div">
                {todoItem}
              </Typography>
            </ListItemText>
          </ListItem>
          )
        })}
      </List>
    </Grid>
  </Box>
  )
}