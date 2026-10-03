import Cart from '../components/Cart'

function CartView({ cartItems, onChange, onRemove }) {
  return (
    <div>
      <h2>Your Cart</h2>
      <Cart cartItems={cartItems} onChange={onChange} onRemove={onRemove} />
    </div>
  )
}

export default CartView
