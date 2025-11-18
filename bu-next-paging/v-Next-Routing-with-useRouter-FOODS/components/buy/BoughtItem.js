import { useRouter } from 'next/router';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { deleteBoughtItem } from '@/utils/api/items';

export default function BoughtItem({boughtItem}) {
  const router = useRouter()

  const handleDelete = async () => {
    await deleteBoughtItem(boughtItem.id);
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
          {boughtItem.item.name}
        </Typography>
        <Typography gutterBottom variant="body2"  color="text.secondary" component="div">
          {boughtItem.item.category} • {boughtItem.item.rating}
        </Typography>
      </Box>
      <Box sx={{p: 2}}>
        <Button
          size="small"
          color="error"
          variant="contained"
          onClick={handleDelete}
        >
          Delete From Bought Items
        </Button>
      </Box>
    </Box>
  </Card>
  )
}