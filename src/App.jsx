import { useState } from 'react'
import products from './data/products.json'
import Navbar from './components/Navbar'
import HomeView from './views/HomeView'
import ShopView from './views/ShopView'
import ProductDetailView from './views/ProductDetailView'
import AccountView from './views/AccountView'
import CreateAccountView from './views/CreateAccountView'
import CartView from './views/CartView'

function App() {
  const [view, setView] = useState('home')
  const [selected, setSelected] = useState(null)
  const [cartItems, setCartItems] = useState([])

  const same = (a, b) => a.id === b.id && a.size === b.size && a.color === b.color

  const addToCart = (item) =>
    setCartItems((prev) =>
      prev.some((i) => same(i, item))
        ? prev.map((i) => (same(i, item) ? { ...i, quantity: i.quantity + item.quantity } : i))
        : [...prev, item]
    )

  const changeQuantity = (item, delta) =>
    setCartItems((prev) =>
      prev.map((i) => (same(i, item) ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i))
    )

  const removeItem = (item) => setCartItems((prev) => prev.filter((i) => !same(i, item)))

  const selectProduct = (p) => {
    setSelected(p)
    setView('detail')
  }

  const count = cartItems.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <>
      <Navbar setView={setView} count={count} />
      <div className="container my-4">
        {view === 'home' && <HomeView setView={setView} />}
        {view === 'shop' && <ShopView products={products} onSelect={selectProduct} />}
        {view === 'detail' && <ProductDetailView product={selected} onAdd={addToCart} />}
        {view === 'account' && <AccountView setView={setView} />}
        {view === 'create' && <CreateAccountView />}
        {view === 'cart' && (
          <CartView cartItems={cartItems} onChange={changeQuantity} onRemove={removeItem} />
        )}
      </div>
    </>
  )
}

export default App
