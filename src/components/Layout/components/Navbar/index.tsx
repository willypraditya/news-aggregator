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
        justifyContent="space-between"
        alignItems="center"
        gap={2}
      >
        <Grid item>
          <Grid container alignItems="center" gap={1}>
            <Grid item>
              <Typography
                variant="h4"
                sx={{ display: { xs: 'none', sm: 'block' } }}
                className={logoFont.className}
              >
                The Not Washington Post
              </Typography>
            </Grid>
          </Grid>
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
