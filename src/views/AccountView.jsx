import { useState } from 'react'

function AccountView({ setView }) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!login.trim() || !password) return setError('Login and password are required.')
    setError('Login submitted.')
  }

  return (
    <form onSubmit={submit} className="col-md-5" noValidate>
      <h2>Account</h2>
      <input className="form-control mb-2" placeholder="Login" value={login} onChange={(e) => setLogin(e.target.value)} />
      <input type="password" className="form-control mb-2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {error && <div className="alert alert-info">{error}</div>}
      <button className="btn btn-primary me-2">Log In</button>
      <button type="button" className="btn btn-link" onClick={() => setView('create')}>Create Account</button>
    </form>
  )
}

export default AccountView
