import { useEffect, useState } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import NavBar from "@/components/NavBar";
import BoughtItemsList from "@/components/buy/BoughtItemsList";

import { getBoughtItemsDetail } from "@/utils/api/items";

export default function BoughtItems() {
  const [boughtItems, setBoughtItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(`MOUNT - BoughtItems pages/boughtItems.js`);
    loadBoughtItems();
    return () => {
      console.log(`UNMOUNT - BoughtItems pages/boughtItems.js`)}
  }, []);

  const loadBoughtItems = async () => {
    const data = await getBoughtItemsDetail();
    setBoughtItems(data);
    setLoading(false);
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
    );
  }
  
  return (
    <div>
      <NavBar />
      <Container sx={{ display: 'flex', paddingTop: 4, justifyContent: 'center' }}>
        <BoughtItemsList boughtItems={boughtItems} />
      </Container>
    </div>
  );
}