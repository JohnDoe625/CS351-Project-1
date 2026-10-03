function HomeView({ setView }) {
  return (
    <div className="text-center py-5">
      <h1>Peak Performance</h1>
      <p className="lead">Running shoes and hiking boots for every trail.</p>
      <button className="btn btn-primary" onClick={() => setView('shop')}>Shop Now</button>
    </div>
  )
}

export default HomeView
