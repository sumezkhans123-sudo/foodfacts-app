import { AppBar, Toolbar, Typography, Button, Badge } from '@mui/material'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function NavBar() {
  const savedCount = useSelector((state) => state.saved.items.length)

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          FoodFacts
        </Typography>

        <Button color="inherit" component={Link} to="/">
          Search
        </Button>

        <Button color="inherit" component={Link} to="/saved">
          <Badge badgeContent={savedCount} color="secondary">
            Saved
          </Badge>
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
