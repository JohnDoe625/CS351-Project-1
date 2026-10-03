function CartItem({ item, onChange, onRemove }) {
  return (
    <div className="row align-items-center border-bottom py-2">
      <div className="col-3 col-md-2">
        <img src={`/images/${item.image}`} className="img-fluid" alt={item.name} />
      </div>
      <div className="col-9 col-md-4">
        <strong>{item.name}</strong>
        <div>Size: {item.size} | Color: {item.color}</div>
        <div>Unit price: ${item.price.toFixed(2)}</div>
      </div>
      <div className="col-6 col-md-3 mt-2">
        <button className="btn btn-outline-secondary btn-sm" onClick={() => onChange(item, -1)}>-</button>
        <span className="mx-2">{item.quantity}</span>
        <button className="btn btn-outline-secondary btn-sm" onClick={() => onChange(item, 1)}>+</button>
      </div>
      <div className="col-6 col-md-3 mt-2 text-end">
        ${(item.price * item.quantity).toFixed(2)}
        <button className="btn btn-danger btn-sm ms-2" onClick={() => onRemove(item)}>Remove</button>
      </div>
    </div>
  )
}

export default CartItem
