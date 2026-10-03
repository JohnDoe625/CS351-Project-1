import ProductCard from './ProductCard'

function ProductList({ products, onSelect }) {
  return (
    <div className="row">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onSelect={onSelect} />
      ))}
    </div>
  )
}

export default ProductList
