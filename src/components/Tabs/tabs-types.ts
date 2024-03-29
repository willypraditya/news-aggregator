import { ReactElement } from 'react'

export interface TabsProps {
  tabs: {
    key: string
    label: string
    component?: ReactElement
  }[]
  onChange: (selectedTab: number) => void
}
