import Head from 'next/head'
import {useEffect, useState} from 'react'

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import NavBar from '@components/NavBar';

export default function Home() {
  console.log(`about Home; mounting...`)

  useEffect(()=> {
    console.log(`about Home; useEffect on mount;`)
    return () => {
      console.log(`about Home; useEffect on unMount;`)
    }
  }, [])
  
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <NavBar />
        <Container sx={{paddingTop:2}} component="main" maxWidth="xs">
          <Typography variant="h3">
            About us
          </Typography>
          <Typography variant="p">
            We really like space so we created an application that's about space
            agencies and their spacecrafts.
          </Typography>
        </Container>
    </div>
  )
}
