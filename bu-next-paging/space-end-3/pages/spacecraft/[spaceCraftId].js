import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import NavBar from '@components/NavBar';
import SimpleDetailsCard from '@components/SimpleDetailsCard';
import LoadingCircle from '@components/LoadingCircle'
import { getSpaceCraft } from '@api/spaceCraft';

export default function SpaceCraft() {
  const [spaceCraftDetails, setSpaceCraftDetails] = useState()

  const router = useRouter()
  
  const spaceCraftId = router.query.spaceCraftId
  
  console.log(`SpaceCraft Mounting...`)

  useEffect(()=> {
    const myFunc = async ()=> {
      try {
        if(spaceCraftId == 17){
          console.log(`SpaceCraft; useEffect; spaceCraftId= ${spaceCraftId}`)
        } else {
          console.log(`SpaceCraft; useEffect; getSpaceCraft(${spaceCraftId})`)
          const data = await getSpaceCraft(spaceCraftId)
          setSpaceCraftDetails(data)
        }
        
      } 
      catch(error) {
        console.error(`useEffect catch on getSpaceCraft: ${error.message}`)
      }
    }
    myFunc()
  }, [spaceCraftId])

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