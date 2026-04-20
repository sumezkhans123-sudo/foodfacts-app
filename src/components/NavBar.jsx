import { NavLink } from 'react-router-dom'

function NavBar({ savedCount }) {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '10px' }}>
      <h2>FoodFacts</h2>

      <NavLink to="/">Search</NavLink>

      <NavLink to="/saved">
        Saved {savedCount > 0 && `(${savedCount})`}
      </NavLink>
    </nav>
  )
}

export default NavBar
