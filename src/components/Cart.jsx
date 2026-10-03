import CartItem from './CartItem'

function Cart({ cartItems, onChange, onRemove }) {
  const count = cartItems.reduce((sum, i) => sum + i.quantity, 0)
  const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0)

  if (cartItems.length === 0) return <p>Your cart is empty.</p>

  return (
    <div>
      {cartItems.map((i) => (
        <CartItem key={`${i.id}-${i.size}-${i.color}`} item={i} onChange={onChange} onRemove={onRemove} />
      ))}
      <h5 className="mt-3">Total items: {count}</h5>
      <h5>Subtotal: ${subtotal.toFixed(2)}</h5>
    </div>
  )
}

export default Cart
