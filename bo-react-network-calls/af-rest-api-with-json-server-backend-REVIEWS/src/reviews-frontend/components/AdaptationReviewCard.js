import Avatar from '@mui/material/Avatar';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

export default function AdaptationReviewCard({key, rating, title, comment}) {
  return (
  <Card sx={{mt: 2 }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
          {rating}
        </Avatar>
      }
      title={
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      }
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {comment}
      </Typography>
    </CardContent>
  </Card>
  ) 
}
