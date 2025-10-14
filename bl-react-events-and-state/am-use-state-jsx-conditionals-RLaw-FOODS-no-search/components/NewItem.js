import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function NewItem({item}) {
  return <>
    <Card variant="outlined" sx={{ marginBottom: 2, width: "90%"}}>
      <Box sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h6" component="div">
            {item.title}
          </Typography>
          <Typography gutterBottom variant="body2"  color="text.secondary" component="div">
            {item.item_type}
          </Typography>
        </Stack>
      </Box>
    </Card>
  </>
}
