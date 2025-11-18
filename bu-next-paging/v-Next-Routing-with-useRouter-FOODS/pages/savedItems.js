import { useEffect, useState } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

import NavBar from "@/components/NavBar";
import SavedItemsList from "@/components/savedItems/SavedItemsList";

import { getSavedItemsDetail } from "@/utils/api/items";

export default function SavedItems() {
  const [savedItems, setSavedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(`MOUNT - SavedItems pages/savedItems.js`);
    loadSavedItems();
    return () => {
      console.log(`UNMOUNT - SavedItems pages/savedItems.js`)}
  }, []);

  const loadSavedItems = async () => {
    const data = await getSavedItemsDetail();
    setSavedItems(data);
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
        <SavedItemsList savedItems={savedItems} />
      </Container>
    </div>
  );
}