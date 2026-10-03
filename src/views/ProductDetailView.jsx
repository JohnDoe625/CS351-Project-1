import { useState } from 'react'

function ProductDetailView({ product, onAdd }) {
  const [size, setSize] = useState('')
  const [color, setColor] = useState(product.colors[0])
  const [quantity, setQuantity] = useState(1)
  const [error, setError] = useState('')

  const price = product.salePrice ?? product.price

  const add = () => {
    if (!size) return setError('Please select a size.')
    if (quantity < 1 || quantity > product.quantityInStock) {
      return setError(`Quantity must be between 1 and ${product.quantityInStock}.`)
    }
    setError('')
    onAdd({ id: product.id, name: product.name, image: product.thumbnail, size, color, quantity, price })
  }

  return (
    <div className="row">
      <div className="col-md-6">
        <img src={`/images/${product.image}`} className="img-fluid" alt={product.name} />
      </div>
      <div className="col-md-6">
        <h2>{product.name}</h2>
        <p>{product.brand} | {product.category} | {product.gender}</p>
        <p>{product.longDescription}</p>
        <ul>
          <li>Weight: {product.weight}</li>
          <li>Material: {product.material}</li>
          <li>Heel drop: {product.heelDrop}</li>
          <li>Arch support: {product.archSupport}</li>
          <li>Water resistant: {product.waterResistant ? 'Yes' : 'No'}</li>
          <li>Rating: {product.rating} ({product.numberOfReviews} reviews)</li>
          <li>In stock: {product.quantityInStock}</li>
        </ul>
        <h4>${price}</h4>

        <label className="form-label">Size</label>
        <select className="form-select mb-2" value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="">Select a size</option>
          {product.sizes.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>

        <label className="form-label">Color</label>
        <select className="form-select mb-2" value={color} onChange={(e) => setColor(e.target.value)}>
          {product.colors.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>

        <label className="form-label">Quantity</label>
        <input type="number" className="form-control mb-2" value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))} />

        {error && <div className="alert alert-danger">{error}</div>}
        <button className="btn btn-primary" onClick={add}>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductDetailView
