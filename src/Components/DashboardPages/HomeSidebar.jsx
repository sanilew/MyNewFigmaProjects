import React from 'react'
import Sidemenu from "./Sidemenu"
import { Box } from '@mui/material'


function Home() {
  return (
    <div>
     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Sidemenu/>
        <h4>Home</h4>
        
        
      </Box>
    </div>
  )
}

export default Home
