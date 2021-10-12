import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { connectASC } from '../client/ascClient'
import { useState } from 'react'
import { Backdrop, CircularProgress, Typography } from '@mui/material'

interface ILogin {
  setConnected: React.Dispatch<any>
}

const Login: React.FC<ILogin> = ({setConnected}) => {
  const [userId, setUserId] = useState('')
  const [open, setOpen] = useState(false)
  const handleClick = async () => {
    if(userId === '') return
    console.log(userId)
    try {
      setOpen(true)
      const res = await connectASC(userId)
      console.log(res)
      setConnected(true)
    } catch (error) {
      console.error(error)
      console.log('noob')
    }
  }

	return (
    <Box>
      <Typography variant="h3">Login</Typography>
      <br />
      <Box width={400} display="flex" justifyContent="space-around" alignContent="center">
        <TextField onChange={e => setUserId(e.target.value)}/>
        <Button variant="contained" onClick={handleClick}>Click me!</Button>
      </Box>
      <Backdrop open={open} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
	)
}

export default Login