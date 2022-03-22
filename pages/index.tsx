import { Button, Box, TextField } from '@mui/material';
import React, { useState } from 'react';
import { spacing } from '@mui/system';

function Index() {
  const [entry, setEntry] = useState('')
  const [convertedNumeral, setConvertedNumeral] = useState('')

  const submitConversion = async () => {
    console.log(JSON.stringify({ numeral: entry }))
    const response = await fetch('http://localhost:8080', {
      method: 'POST',
      body: JSON.stringify({ numeral: entry })
    })
    const data = await response.json()
    setConvertedNumeral(data.numeral)

  }
  return (
    <>
      <h1>Convert your Roman numerals into decimal numbers and vice versa</h1>
      <Box sx={{ '& button': { m: 3 } }}>
        <div>
          <TextField label="Enter number or numeral" variant="filled" type='text' value={entry} onChange={e => setEntry(e.target.value)} focused />
        </div>

        <div>
          <Button variant="contained" onClick={submitConversion}>Convert</Button>
        </div>

        <div>
          <p> The converted value is: {convertedNumeral}</p>
        </div>
      </Box>
      </>
  )
}

export default Index