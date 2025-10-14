import { useState } from "react";

import Container from "@mui/material/Container";

import ItemForm from "@/components/ItemForm";
import NewItemList from "@/components/NewItemList";

const existingItems = [
  {
    "id": 1,
    "title": "Sirloin Roast",
    "date_posted": "2024-04-19",
    "item_type": "Meat"
  },
  {
    "id": 2,
    "title": "Pear",
    "date_posted": "2024-04-18",
    "item_type": "Fruit"
  }
]


export default function Home() {
  const [items, setItems] = useState(existingItems);
  return (
    <main
    >
      <Container>
        <ItemForm setItems={setItems}/>
        <NewItemList items={items} />
      </Container>
    </main>
  );
}
