import { Container, Typography, CircularProgress, Grid } from '@mui/material'
import SearchBar from '../components/SearchBar'
import FoodCard from '../components/FoodCard'
import useFoodSearch from '../hooks/useFoodSearch'

function HomePage() {
  const { results, loading, error, searchFood } = useFoodSearch()

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 2 }}>
        Search Food
      </Typography>

      <SearchBar onSearch={searchFood} />

      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}

      <Grid container>
        {results.map((product) => (
          <Grid item key={product.code}>
            <FoodCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default HomePage
