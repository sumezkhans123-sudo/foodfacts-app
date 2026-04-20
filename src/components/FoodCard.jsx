import { Card, CardContent, Typography, CardMedia } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function FoodCard({ product }) {
  const navigate = useNavigate()

  return (
    <Card
      sx={{ maxWidth: 300, m: 2, cursor: 'pointer' }}
      onClick={() => navigate(`/product/${product.code}`)}
    >
      {product.image_small_url && (
        <CardMedia
          component="img"
          height="140"
          image={product.image_small_url}
        />
      )}

      <CardContent>
        <Typography variant="h6">
          {product.product_name}
        </Typography>

        <Typography variant="body2">
          {product.brands}
        </Typography>

        <Typography variant="body2">
          Calories: {product.nutriments?.['energy-kcal_100g']}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default FoodCard
