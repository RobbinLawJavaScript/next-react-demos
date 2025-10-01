import { createTheme } from '@mui/material'

const myThemeOptions1 = {
  palette: {
    type: 'dark',
    primary: {
      main: '#fedbd0',
    },
    secondary: {
      main: '#442c2e',
    },
  },
}

const myThemeOptions2 = {
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    h2: {
      fontFamily: 'Lato',
    },
  },
}

//export const myTheme = createTheme(myThemeOptions1)
export const myTheme = createTheme(myThemeOptions2)
