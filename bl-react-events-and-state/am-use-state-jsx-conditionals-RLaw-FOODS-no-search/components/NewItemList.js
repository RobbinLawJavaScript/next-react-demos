import { useState } from 'react';

import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import NewItem from './NewItem';

export default function NewItemList({ items }) {
  const [search, setSearch] = useState('')
  return <>
    
    <Typography
      variant="h4"
      sx={{ paddingTop: 4, paddingBottom: 2}}
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
      return item.title.toLowerCase().includes(search.toLowerCase())
    }).map((item, index) => {
      return <NewItem key={index} item={item} />
    })}
  </>

}