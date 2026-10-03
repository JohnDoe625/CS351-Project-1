function Navbar({ setView, count }) {
  const link = (v, label) => (
    <li className="nav-item">
      <button className="nav-link btn btn-link" onClick={() => setView(v)}>{label}</button>
    </li>
  )

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <button className="navbar-brand btn btn-link" onClick={() => setView('home')}>
          🥾 Peak Performance
        </button>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto">
            {link('home', 'Home')}
            {link('shop', 'Shop')}
            {link('account', 'Account')}
            {link('cart', `Cart (${count})`)}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
