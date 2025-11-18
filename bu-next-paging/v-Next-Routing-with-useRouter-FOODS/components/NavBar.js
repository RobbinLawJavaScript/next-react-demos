import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function NavBar() {  
  return (
  <Box sx={{ flexGrow: 1, marginBottom: 2}}>
    <AppBar position="static">
      <Toolbar>
          <Typography variant="h6" component="div"  sx={{ flexGrow: 1 }}>
            <Link href="/">
              Items
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{paddingRight: 2}}>
            <Link href="/savedItems">
              Favorite-Items
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{paddingRight: 2}}>
            <Link href="/boughtItems">
              Bought-Items
            </Link>
          </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  )
}