import '../styles/globals.css'
import { ThemeProvider } from '@mui/material';
import { myTheme } from '../utils/theme/config.js'

export default function MyApp({ Component, pageProps }) {
  return (
  <ThemeProvider theme={myTheme}>
    <Component {...pageProps} />
  </ThemeProvider>
  )
}
