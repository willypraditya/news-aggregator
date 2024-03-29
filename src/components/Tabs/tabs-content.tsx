import { ReactElement } from 'react'

import Box from '@mui/material/Box'

interface TabsContentProps {
  selectedTab: number
  index: number
  children: ReactElement
}

export default function TabsContent({
  selectedTab,
  index,
  children,
}: TabsContentProps) {
  return (
    <Box display={selectedTab === index ? 'block' : 'none'} marginTop={2}>
      {children}
    </Box>
  )
}
