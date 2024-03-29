import { ReactNode } from 'react'

import Image from 'next/image'

import { Search } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search'
import { Box, Grid, TextField, Typography } from '@mui/material'

import Navbar from './components/Navbar'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <Navbar />

      <Box sx={{ padding: 1 }}>{children}</Box>
    </Box>
  )
}

export default Layout
