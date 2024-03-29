import { Box, CircularProgress } from '@mui/material'

const Loading = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress color="secondary" />
    </Box>
  )
}

export default Loading
