import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

export default function BuyItemDetails({item}) {
  return (
  <Card variant="outlined" sx={{ marginBottom: 2, width: "90%"}}>
    <Box sx={{ p: 2 }}>
      <Typography gutterBottom variant="h5" component="div">
        {item.name}
      </Typography>
      <Typography gutterBottom variant="body2"  color="text.secondary" component="div">
        Posted: {new Date(item.date_posted).toDateString()}
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
    </Box>
  </Card>
  )
}