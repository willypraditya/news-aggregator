import { ReactNode, createContext, useContext, useState } from 'react'

interface SearchContextType {
  searchQuery: string
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}

const SearchContext = createContext<SearchContextType>({
  searchQuery: '',
  setSearchQuery: () => {},
})

export const useSearchContext = () => useContext(SearchContext)

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState<string>('')

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  )
}
