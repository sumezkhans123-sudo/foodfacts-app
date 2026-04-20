import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeItem } from '../store/savedSlice'

function SavedPage() {
  const savedItems = useSelector((state) => state.saved.items)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  if (savedItems.length === 0) {
    return <p>No saved items</p>
  }

  return (
    <div>
      <h2>Saved Items</h2>

      {savedItems.map((item) => (
        <div key={item.id}>
          <h3>{item.product_name}</h3>

          <button onClick={() => navigate(`/product/${item.id}`)}>
            View
          </button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  )
}

export default SavedPage
