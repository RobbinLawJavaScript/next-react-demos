import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function SuccessfulBuyMessage({item}) {
  return <Alert severity="success">
    <AlertTitle>Successfully Bought Item!</AlertTitle>
    You have successfully bought this item: {item.name}
  </Alert>
}
