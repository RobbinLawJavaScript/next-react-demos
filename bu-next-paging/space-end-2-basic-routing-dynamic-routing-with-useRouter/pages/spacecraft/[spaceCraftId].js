import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import NavBar from '@components/NavBar';
import SimpleDetailsCard from '@components/SimpleDetailsCard';
import LoadingCircle from '@components/LoadingCircle'
import {getSpaceCraft} from '@api/spaceCraft';

export default function SpaceCraft() {
  console.log(`SpaceCraft; mounting...`)
  const [spaceCraftDetails, setSpaceCraftDetails] = useState()

  const router = useRouter()
  
  const spaceCraftId = router.query.spaceCraftId

  useEffect(()=> {
    console.log(`SpaceCraft; useEffect on mount;`)
    return () => {
      console.log(`SpaceCraft; useEffect on unMounting;`)
    }
  }, [])

  useEffect(()=> {
    console.log(`SpaceCraft; useEffect on spaceCraftId; begin spaceCraftId= ${spaceCraftId}`)
    asyncGetSpaceCraft()
    console.log(`SpaceCraft; useEffect on spaceCraftId; end spaceCraftId= ${spaceCraftId}`)
  }, [spaceCraftId])

  const asyncGetSpaceCraft = async ()=> {
    try {
      if(spaceCraftId == undefined){
        console.log(`SpaceCraft; asyncGetSpaceCraft; begin spaceCraftId= ${spaceCraftId}`)
      } else {
        console.log(`SpaceCraft; asyncGetSpaceCraft; begin getSpaceCraft(${spaceCraftId})`)
        const data = await getSpaceCraft(spaceCraftId)
        setSpaceCraftDetails(data)
        console.log(`SpaceCraft; asyncGetSpaceCraft; end`)
      }
    } 
    catch(error) {
      console.error(`SpaceCraft; asyncGetSpaceCraft; catch ${error.message}`)
    }
  }

  return  <>      
  <NavBar />
  {!spaceCraftDetails ? 
    <div>
    {console.log(`SpaceCraft; showing spinner as spaceCraftDetails= ${spaceCraftDetails}`)}
    <LoadingCircle />
    </div>
    :
    <div>
      {console.log(`SpaceCraft; showing content`)}
      <Container sx={{paddingTop:2}}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom>
                {spaceCraftDetails.name}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <SimpleDetailsCard 
              title={`${spaceCraftDetails.name} history`}
              subDescription={spaceCraftDetails.history}
            />
          </Grid>
          <Grid item xs={4}>
            <SimpleDetailsCard 
              title={`${spaceCraftDetails.name} details`}
              subDescription={spaceCraftDetails.details}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  }
  </>
}