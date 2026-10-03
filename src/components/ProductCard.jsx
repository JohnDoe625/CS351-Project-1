function ProductCard({ product, onSelect }) {
  return (
    <div className="col-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100" role="button" onClick={() => onSelect(product)}>
        <img src={`/images/${product.thumbnail}`} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          {product.salePrice ? (
            <p className="fw-bold">
              <s className="text-muted">${product.price}</s> ${product.salePrice}
            </p>
          ) : (
            <p className="fw-bold">${product.price}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
