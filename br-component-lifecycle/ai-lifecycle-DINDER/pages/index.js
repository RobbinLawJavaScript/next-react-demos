import {useState, useEffect} from 'react'

import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import {faker} from '@faker-js/faker'

import {getData} from '../api/network'

import Loading from '../components/Loading'
import DogCard from '../components/DogCard'

const CENTER_PROPS = {
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
}

export default function Home() {
  console.log(`index Home; mounting...`)

  const [dogImage, setDogImage] = useState()
  const [dogName, setDogName] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    console.log(`index Home; useEffect on mount; begin`)
    getDog()
    console.log(`index Home; useEffect on mount; end`)
    return () => {
      console.log(`index Home; useEffect on unMount`)
    }
  }, [])

  useEffect(()=> {
    console.log(`index Home; useEffect on dogImage; begin`)
    console.log(`dogImage= ${dogImage} dogName= ${dogName}`)
    if(dogImage != undefined && dogName != undefined)
      setLoading(false)
    console.log(`index Home; useEffect on dogImage; end`)
  }, [dogImage])

  const getDog = async () => {
    console.log(`index Home; getDog(); begin`)
    setLoading(true)
    const data = await getData()
    // console.log(data)
    setDogImage(data.message)
    setDogName(faker.name.firstName())
    console.log(`index Home; getDog(); dogImage= ${dogImage} dogName= ${dogName}`)
    console.log(`index Home; getDog(); end`)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Dinder</title>
        <meta name="description" content="Dog matching app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container sx={{paddingTop:2}} maxWidth="sm">
          <Grid item xs={12} {...CENTER_PROPS}>
            <Typography variant="h5" component="h1">
              Welcome to Dinder
            </Typography>
          </Grid>
          {loading?
            <div>
            {console.log(`index Home; showing spinner as loading= ${loading}`)}
            <Loading text="Loading dog..."/>
            </div>
            :
            <div>
            {console.log(`index Home; showing content as loading= ${loading}`)}
            <DogCard
              imageUrl={dogImage}
              name={dogName}
              buttonPressedCallBack={getDog}
            />
            </div>
          }
        </Container>
      </main>
    </div>
  )
}
