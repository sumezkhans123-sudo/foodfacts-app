import { useState } from 'react'

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!query.trim()) {
      setError('Please enter a food name')
      return
    }

    if (query.trim().length < 2) {
      setError('Must be at least 2 characters')
      return
    }

    setError('')
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search food..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button type="submit">Search</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  )
}

export default SearchBar
