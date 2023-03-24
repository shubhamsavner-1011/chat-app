import { TextField } from '@mui/material'
import React from 'react'

export const SearchField = ({placeholder, setSearchvalue}) => {
  return (
    <div>
      <TextField id="standard-basic"  variant="standard" placeholder={placeholder} onChange={(e)=>setSearchvalue(e.target.value) }/>
    </div>
  )
}
