import {useState, useEffect} from 'react';
import { useRouter } from 'next/router';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import BuyItemDetails from '@/components/buy/BuyItemDetails';
import BuyItemForm from '@/components/buy/BuyItemForm';
import SuccessfulBuyMessage from '@/components/buy/SuccessfulBuyMessage';
import NavBar from '@/components/NavBar';

import { getItem, postBoughtItem } from '@/utils/api/items';

export default function handler() {
  const router = useRouter();

  const [itemData, setItemData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [successfullyBought, setSuccessfullyBought] = useState(false);

  const { itemId } = router.query;

  useEffect(() => {
    console.log(`MOUNT - handler pages/buy/[itemId].js`);
    return () => {
      console.log(`UNMOUNT - handler pages/buy/[itemId].js`)}
  }, []);

  useEffect(() => {
    // null case
    if(!itemId) { return }
    loadItem();
  }, [itemId])

  const loadItem = async () => {
    const data = await getItem(itemId);
    setItemData(data);
    setLoading(false);
  }

  const submitItemBought = async (itemBought) => {
    const data = await postBoughtItem(itemBought);
    console.log("submit Item Bought")
    console.log(data);
    setSuccessfullyBought(true);
  }
  
  if (loading) {
    return (
      <main>
        <NavBar />
        <Container>
          <Box sx={{ display: 'flex', paddingTop: 4, justifyContent: 'center' }}>
            <CircularProgress />
          </Box>
        </Container>
      </main>
    )
  }

  return (
    <>
    <NavBar />
    <Typography variant="h4" sx={{paddingLeft: 2}}>
      Buy Item
    </Typography>
    <Typography variant="body1" sx={{paddingLeft: 2}}>
      Enter your name before buying this item
    </Typography>
    <Grid container spacing={2} sx={{padding: 2}}>
      <Grid item md={6} xs={12}>
        { successfullyBought ?
          <SuccessfulBuyMessage item={itemData} />
          :  
          <BuyItemForm item={itemData}  submitCallback={submitItemBought} />
        }
      </Grid>
      <Grid item md={6} xs={12}>
        <BuyItemDetails item={itemData}/>
      </Grid>
    </Grid>
    </>
  )
}