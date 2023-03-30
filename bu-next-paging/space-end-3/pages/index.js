import Head from 'next/head'
import { useEffect, useState } from 'react'

import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import LoadingCircle from '@components/LoadingCircle'
import AgenciesCard from '@components/AgenciesCard'
import NavBar from '@components/NavBar'

import { getAgencies } from 'api/agencies'

export default function Home() {
  const [agenciesData, setAgenciesData] = useState()
  
  //console.clear()
  console.log(`Home Mounting...`)

  useEffect(()=> {
    const myFunc = async ()=> {
      try {
        console.log(`Home; useEffect on mount; getAgencies()`)
        const data = await getAgencies()
        setAgenciesData(data.results)
      } 
      catch(error) {
        console.log(`useEffect catch on getSpaceCraft: ${error.message}`)
      }
    }
    myFunc()
  }, [])

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <NavBar />
        { !agenciesData?
          <div>
            {console.log(`Home; showing spinner as agenciesData= ${agenciesData}`)}
            <LoadingCircle />
          </div>
          :
          <div>
            {console.log(`Home; showing content`)}
          <Container sx={{paddingTop:2}} component="main" maxWidth="xs">
            <Typography variant="h3">
              Space Agencies
            </Typography>
            <Box
              sx={{
                marginTop: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {agenciesData.map((agency)=> {
                return (
                <AgenciesCard
                  key={agency.id}
                  agencyId={agency.id}
                  imageUrl={agency.image_url}
                  name={agency.name}
                  abbreviation={agency.abbrev}
                  description={agency.description}
                />
                )
              })}
            </Box>
          </Container>
          </div>
        }
    </div>
  )
}
