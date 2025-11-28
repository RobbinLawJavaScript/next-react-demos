import Container from '@mui/material/Container';

import Navbar from '@/components/Navbar';
import InventoryManager from '@/components/InventoryManager';

export default function Home() {
  return (<>
    <Navbar />
    <Container component="main" sx={{ mt: 4, mb: 4 }}>
      <InventoryManager />
    </Container>
  </>
);

}
