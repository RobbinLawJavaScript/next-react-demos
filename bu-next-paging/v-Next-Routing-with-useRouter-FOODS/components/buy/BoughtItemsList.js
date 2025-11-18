import Typography from '@mui/material/Typography';

import BoughtItem from './BoughtItem';

export default function BoughtItemsList({boughtItems}) {
  
  return (
  <div style={{width: '100%'}}>
    {boughtItems.length === 0 &&
      <Typography variant="h5" component="div" sx={{padding: 2}}>
        No bought items
      </Typography>
    }
    {boughtItems.map((boughtItem) => {
      return <BoughtItem key={boughtItem.id} boughtItem={boughtItem} />
    })}
  </div>
  )
}