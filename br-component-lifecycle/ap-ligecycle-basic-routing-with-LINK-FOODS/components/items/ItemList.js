import { useState } from 'react';

import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import Item from './Item';

export default function ItemList({ items, savedItems, setSavedItems }) {
  const [search, setSearch] = useState('')
 
  return (
  <>
    <Typography
      variant="h4"
      sx={{ paddingTop: 2, paddingBottom: 2}}
    >
    </Typography>
    <TextField
      label="Search"
      fullWidth
      sx={{width: '40%', marginBottom: 2}}
      value={search}
      onChange={(event) => setSearch(event.target.value)}
    />
    {items.filter((item)=> {
      if(search === '') {
        return true
      }
      return item.name.toLowerCase().includes(search.toLowerCase())
    }).map((item) => {
      return <Item
        key={item.id}
        item={item}
        savedItems={savedItems}
        setSavedItems={setSavedItems}
      />
    })}
  </>
  )
}