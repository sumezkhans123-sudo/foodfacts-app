function FoodCard({ product }) {
  const { product_name, brands, nutriments, image_small_url } = product

  return (
    <div className="food-card">
      {image_small_url && <img src={image_small_url} alt={product_name} />}
      <h2>{product_name || "Unknown Product"}</h2>
      <p>{brands}</p>
      <p>Calories: {nutriments?.['energy-kcal_100g']} kcal</p>
      <p>Protein: {nutriments?.proteins_100g} g</p>
      <p>Carbs: {nutriments?.carbohydrates_100g} g</p>
    </div>
  )
}

export default FoodCard
