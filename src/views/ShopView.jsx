import { useState } from 'react'
import ProductList from '../components/ProductList'

function ShopView({ products, onSelect }) {
  const [page, setPage] = useState(1)
  const pages = Math.ceil(products.length / 10)
  const shown = products.slice((page - 1) * 10, page * 10)

  return (
    <div>
      <h2>Shop</h2>
      <ProductList products={shown} onSelect={onSelect} />
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-outline-primary" disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
        <span className="mx-3">Page {page} of {pages}</span>
        <button className="btn btn-outline-primary" disabled={page === pages} onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  )
}

export default ShopView
