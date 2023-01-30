import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

// Our material ui imports.
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* maxWidth can be xs | sm | md | lg | xl | false */}
        <Container maxWidth="sm">
          {/* my	margin-top, margin-bottom 
              By default margin is 8px so with
              my: 4 margin-top and margin-bottom
              are both 32px = 4 * 8px.
          */}
          <Box sx={{ my: 4 }}>
            {/* component is the html element used.
                variant means apply the theme of the value.
            */}
            <Typography variant="h2" component="h2">
              MUI Example
            </Typography>
            <Typography variant="h4" component="h2">
              MUI Example
            </Typography>
            <Typography variant="p" component="p">
              You can perhaps see why this is a popular package.
            </Typography> 
            <Typography variant="h4" component="p">
              You can perhaps see why this is a popular package.
            </Typography>  
          </Box>
        </Container>
      </main>
    </>
  )
}
