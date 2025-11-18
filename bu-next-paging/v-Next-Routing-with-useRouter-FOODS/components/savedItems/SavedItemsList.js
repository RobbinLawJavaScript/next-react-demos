import Typography from '@mui/material/Typography';

import SavedItem from './SavedItem';

export default function SavedItemsList({savedItems}) {
  
  return (
  <div style={{width: '100%'}}>
    {savedItems.length === 0 &&
      <Typography variant="h5" component="div" sx={{padding: 2}}>
        No saved items
      </Typography>
    }
    {savedItems.map((savedItem) => {
      return <SavedItem key={savedItem.id} savedItem={savedItem} />
    })}
  </div>
  )
}