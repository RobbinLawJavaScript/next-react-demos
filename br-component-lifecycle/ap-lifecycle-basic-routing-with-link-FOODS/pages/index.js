import { useEffect, useState } from "react";

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';

import NavBar from "@/components/NavBar";
import ItemList from "@/components/items/ItemList";

import { getItems, getSavedItems } from "@/utils/api/items";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [savedItems, setSavedItems] = useState([]);

  useEffect(() => {
    console.log(`MOUNT - Home pages/index.js`);
    loadItems()
    loadSavedItems()
    return () => {
      console.log(`UNMOUNT - Home pages/index.js`)}
  }, []);

  const loadItems = async () => {
    try {
      const data = await getItems();
      setItems(data);
      setLoading(false);
    } catch (error) {
      console.error('Error loading items:', error);
    }
  };

  const loadSavedItems = async () => {
    try {
      const data = await getSavedItems();
      setSavedItems(data);
    } catch (error) {
      console.error('Error loading saved items:', error);
    }
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
    <main>
      <NavBar />
      <Container>
        <ItemList
          items={items}
          savedItems={savedItems}
          setSavedItems={setSavedItems}
        />
      </Container>
    </main>
  );
}
