import React from 'react'
import { Box } from '@mui/material'
import Sidemenu from './Sidemenu'

function ImportDesign() {
  return (
    <div>
     <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Sidemenu/>
        <h4>ImportDesign</h4>
        </Box>
        </div>
  )
}

export default ImportDesign

