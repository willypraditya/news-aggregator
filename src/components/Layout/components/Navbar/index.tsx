import { useState } from 'react'

import SearchIcon from '@mui/icons-material/Search'
import { AppBar, Grid, IconButton, TextField, Typography } from '@mui/material'

import { useSearchContext } from '@/contexts/SearchContext'
import { logoFont } from '@/styles/fonts'

const Navbar = () => {
  const { setSearchQuery } = useSearchContext()

  const [searchField, setSearchField] = useState<string>('')

  const onSearch = () => {
    setSearchQuery(searchField)
  }

  return (
    <AppBar sx={{ position: 'static', padding: 1, boxShadow: 'none' }}>
      <Grid
        container
        alignItems="center"
        gap={2}
        justifyContent={{
          xs: 'center',
          sm: 'space-between',
        }}
      >
        <Grid item>
          <Typography variant="h4" className={logoFont.className}>
            The Not Washington Post
          </Typography>
        </Grid>

        <Grid item>
          <TextField
            id="outlined-basic"
            placeholder="Search for Articles..."
            variant="standard"
            size="small"
            onChange={(e) => setSearchField(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                onSearch()
              }
            }}
            InputProps={{
              endAdornment: (
                <IconButton onClick={onSearch}>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </Grid>
      </Grid>
    </AppBar>
  )
}

export default Navbar
