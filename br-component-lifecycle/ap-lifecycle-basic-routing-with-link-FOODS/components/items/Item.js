
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import WorkIcon from '@mui/icons-material/Work';

import { postSavedItem } from '@/utils/api/items';

export default function Item({item, savedItems, setSavedItems}) {
  const [saved, setSaved] = useState(false);
  const router = useRouter();

  useEffect(()=> {
    console.log(`MOUNT - Item components/items/Item.js`);
    return () => {
      console.log(`UNMOUNT - Item components/items/Item.js`)}
  }, []);
  
  useEffect(()=> {
    let savedItemIds = savedItems.map((item) => item.itemId);
    if(savedItemIds.includes(item.id)) {
      setSaved(true);
    } else {
      setSaved(false);
    }
  }, [item, savedItems]);

  const handleSaveItemClick = async () => {
    try {
      const data = await postSavedItem(item.id)
      setSaved(true)
      setSavedItems([...savedItems, data])
    } catch (error) {
      console.error('Error saving item:', error);
    }
  }

  return (
    <Card variant="outlined" sx={{ marginBottom: 2, width: "90%"}}>
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="h6" component="div">
          {item.name}
        </Typography>
        <Typography  variant="body1">
          Category
        </Typography>
        <Typography color="text.secondary" variant="body2">
          {item.category}
        </Typography>
        <Typography sx={{marginTop: 1}} variant="body1">
          Rating
        </Typography>
        <Typography color="text.secondary" variant="body2">
          {item.rating}
        </Typography>
        <CardActions sx={{ justifyContent: 'flex-end', padding: 0, marginTop: 2 }}>
          <Button
            startIcon={<BookmarkIcon/>}
            variant="contained"
            onClick={handleSaveItemClick}
            disabled={saved}
          >
            {saved ? "Saved": "Save to Favorites"}
          </Button>
        </CardActions>
      </Box>
    </Card>
  )
}
