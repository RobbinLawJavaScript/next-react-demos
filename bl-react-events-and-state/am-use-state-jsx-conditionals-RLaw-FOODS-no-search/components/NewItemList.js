import Typography from '@mui/material/Typography';
import NewItem from './NewItem';

export default function NewItemList({ items }) {
  return <>
    <Typography
      variant="h4"
      sx={{ paddingTop: 4, paddingBottom: 2}}
    >
    </Typography>
    {items.map((item, index) => {
      return <NewItem key={index} item={item} />
    })}
  </>
}