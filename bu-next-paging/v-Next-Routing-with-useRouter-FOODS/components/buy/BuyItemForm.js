import { useState } from 'react';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

export default function BuyItemForm({item, submitCallback}) {
  const [fullName, setFullName] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      itemId: item.id,
      fullName: fullName
    }
    submitCallback(data);
  }

  return (
  <form style={{width: `90%`, }} onSubmit={(e) => {handleSubmit(e)}}>
    <Stack direction="column" spacing={2}>
      <TextField
        id="full-name"
        label="Full Name"
        variant="outlined"
        fullWidth
        onChange={(e) => setFullName(e.target.value)}
        value={fullName}
      />
      <Button
        variant="contained"
        color="success"
        type="submit"
      >
        Buy Item
      </Button>
    </Stack>
  </form>
  )
}