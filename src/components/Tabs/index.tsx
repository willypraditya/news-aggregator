import { SyntheticEvent, useMemo, useState } from 'react'

import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import MuiTabs from '@mui/material/Tabs'

import TabsContent from './tabs-content'
import { TabsProps } from './tabs-types'

const Tabs = ({ tabs, onChange }: TabsProps) => {
  const [currentTab, setCurrentTab] = useState<number>(0)

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue)
    onChange(newValue)
  }

  return (
    <Box>
      <MuiTabs
        onChange={handleChange}
        value={currentTab}
        variant="scrollable"
        scrollButtons="auto"
        textColor="secondary"
        indicatorColor="secondary"
      >
        {tabs.map((item, index) => {
          return (
            <Tab
              key={item.key}
              label={
                index === 0 ? (
                  <Typography fontSize={14} fontWeight={600}>
                    {item.label.toUpperCase()}
                  </Typography>
                ) : (
                  item.label
                )
              }
              sx={{
                textTransform: 'none',
                color: index === 0 ? 'red !important' : '',
              }}
              disableRipple
            />
          )
        })}
      </MuiTabs>

      {tabs.map((item, index) => (
        <TabsContent key={item.key} selectedTab={currentTab} index={index}>
          {item.component || <div />}
        </TabsContent>
      ))}
    </Box>
  )
}

export default Tabs
