import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function DashboardCard({ icon, title, description, subDescription }) {
  return (
    <Card sx={{ minWidth: 0 }}>
      <CardContent>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
        }}>
          {icon} 
          <Typography sx={{ fontSize: 14, marginTop: 1, marginLeft: 1 }} color="text.secondary" gutterBottom>
            {title}
          </Typography>
        </div>
        <Typography variant="h5" component="div">
          {description}
        </Typography>
        <Typography variant="body2">
          {subDescription}
        </Typography>
      </CardContent>
    </Card>
  );
}