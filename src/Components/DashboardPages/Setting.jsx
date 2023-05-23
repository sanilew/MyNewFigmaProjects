import React from 'react'
import { Box } from '@mui/material'
import Sidemenu from './Sidemenu'

function Setting() {
  return (
    <div>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Sidemenu/>
        <h4>Setting</h4>
        </Box>
    </div>
  )
}

export default Setting
