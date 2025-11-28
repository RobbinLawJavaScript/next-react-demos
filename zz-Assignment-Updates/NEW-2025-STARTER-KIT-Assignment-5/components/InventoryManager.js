import { useState, Fragment } from 'react';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export default function InventoryManager() {
  const [newItemName, setNewItemName] = useState('');
  const [inventoryItems, setInventoryItems] = useState([]);
  const [error, setError] = useState('');

  const addToInventory = (event) => {
    event.preventDefault();
    if (newItemName.trim() === '') {
      console.log("here")
      setError('Item name cannot be empty.');
      return;
    }
    setInventoryItems([...inventoryItems, newItemName.trim()]);
    setNewItemName('');
    setError('');
  }

  return <>
    <Typography variant="h5" sx={{ paddingBottom: 2 }}>
      Inventory Manager
    </Typography>
    <form
      onSubmit={addToInventory}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingBottom: '16px' }}
    >
      <TextField
        id="outlined-basic"
        label="New Item"
        variant="outlined"
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
      />
      <Button
        variant="contained"
        type="submit"
        data-testid="add-to-inventory-button"
      >
        Add to Inventory
      </Button>
      {error !== '' &&
        <Typography
          data-testid="error-message"
          color="error"
        >
          {error}
        </Typography>
      }
    </form>
    <Typography variant="h5">
      Existing Inventory Items
    </Typography>
    {inventoryItems.length === 0 && (
      <Typography
        data-testid="no-items-message"
      >
        No items in inventory.
      </Typography>
    )}
    <List data-testid="inventory-items-list">
      <Divider />
      {inventoryItems.map((item, index) => {
        return <Fragment key={index}>
          <ListItem>
            <ListItemText primary={item} />
          </ListItem>
          <Divider />
        </Fragment>
      })}
    </List>
  </>
}