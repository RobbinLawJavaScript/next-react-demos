import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { deleteSavedItem } from '@/utils/api/items';

export default function SavedItem({savedItem}) {
  const router = useRouter()

  useEffect(()=> {
      console.log(`MOUNT - SavedItem components/savedItems/SavedItem.js`);
      return () => {
        console.log(`UNMOUNT - SavedItem components/savedItems/SavedItem.js`)}
    }, []);

  const handleDelete = async () => {
    await deleteSavedItem(savedItem.id);
    reloadPage()  
  }

  const reloadPage = () => {
    router.reload()
  }

  return (
  <Card variant="outlined" sx={{ marginBottom: 2, width: "90%"}}>
    <Box sx={{ p: 2 }}  display="flex">
      <Box sx={{flexGrow: 1}}>
        <Typography gutterBottom variant="h5" component="div">
          {savedItem.item.name}
        </Typography>
        <Typography gutterBottom variant="body2"  color="text.secondary" component="div">
          {savedItem.item.category} • {savedItem.item.rating}
        </Typography>
      </Box>
      <Box sx={{p: 2}}>
        <Button
          size="small"
          color="error"
          variant="contained"
          onClick={handleDelete}
        >
          Delete From Favorites
        </Button>
      </Box>
    </Box>
  </Card>
  )
}