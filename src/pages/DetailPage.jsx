import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem } from '../store/savedSlice'
import { Container, Typography, Button } from '@mui/material'

function DetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const savedItems = useSelector((state) => state.saved.items)

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `https://world.openfoodfacts.org/api/v0/product/${id}.json`
        )
        setProduct(res.data.product)
        setLoading(false)
      } catch {
        setError('Failed to load product')
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>
  if (!product) return <p>No product found</p>

  const isSaved = savedItems.some((item) => item.id === product.id)

  const handleSave = () => {
    if (isSaved) {
      dispatch(removeItem(product.id))
    } else {
      dispatch(addItem(product))
    }
  }

  return (
    <Container>
      <Button onClick={() => navigate(-1)}>Back</Button>

      <Typography variant="h4">
        {product.product_name}
      </Typography>

      <Typography>{product.brands}</Typography>

      <Typography>
        Calories: {product.nutriments?.['energy-kcal_100g']}
      </Typography>

      <Button variant="contained" onClick={handleSave}>
        {isSaved ? 'Remove from Saved' : 'Save'}
      </Button>
    </Container>
  )
}

export default DetailPage
