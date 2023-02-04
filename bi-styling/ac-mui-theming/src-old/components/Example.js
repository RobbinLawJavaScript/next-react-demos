// https://bareynol.github.io/mui-theme-creator/

import { Box, ThemeProvider, createTheme } from '@mui/system';

const theme = createTheme({
  palette: {
    background: {
      paper: '#fedbd0',
    },
    text: {
      primary: 'cyan',
      secondary: 'yellow',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      main: '#009688',
      dark: '#009688',
    },
  },
});

export default function Example() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 10,
          borderRadius: 4,
          m: 10,
          p: 2,
          minWidth: 300,
        }}
      >
        <Box sx={{ color: 'text.secondary' }}>Sessions</Box>
        <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
          98.3 K
        </Box>
        <Box
          sx={{
            color: 'success.dark',
            display: 'inline',
            fontWeight: 'bold',
            mx: 0.5,
            fontSize: 14,
          }}
        >
          +18.77%
        </Box>
        <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 34 }}>
          vs. last week
        </Box>
      </Box>
    </ThemeProvider>
  );
}