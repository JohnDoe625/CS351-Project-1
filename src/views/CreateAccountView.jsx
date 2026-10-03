import { useState } from 'react'

const empty = { login: '', password: '', email: '', street: '', city: '', state: '', zip: '', phone: '' }

function CreateAccountView() {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const err = {}
    if (!form.login.trim()) err.login = 'Login is required.'
    if (!form.password) err.password = 'Password is required.'
    if (!form.email.trim()) err.email = 'Email is required.'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'Enter a valid email.'
    if (form.state && !/^[A-Za-z]{2}$/.test(form.state)) err.state = 'Use a 2-letter state.'
    if (form.zip && !/^\d{5}$/.test(form.zip)) err.zip = 'Zip must be 5 digits.'
    if (form.phone && !/^\d{10}$/.test(form.phone)) err.phone = 'Phone must be 10 digits.'
    setErrors(err)
    setDone(Object.keys(err).length === 0)
  }

  const field = (name, label, type = 'text') => (
    <div className="mb-2">
      <label className="form-label">{label}</label>
      <input type={type} name={name} className="form-control" value={form[name]} onChange={change} />
      {errors[name] && <div className="text-danger">{errors[name]}</div>}
    </div>
  )

  return (
    <form onSubmit={submit} className="col-md-6" noValidate>
      <h2>Create Account</h2>
      {field('login', 'Login *')}
      {field('password', 'Password *', 'password')}
      {field('email', 'Email *')}
      {field('street', 'Street')}
      {field('city', 'City')}
      {field('state', 'State')}
      {field('zip', 'Zip')}
      {field('phone', 'Phone')}
      {done && <div className="alert alert-success">Account form is valid.</div>}
      <button className="btn btn-primary">Create Account</button>
    </form>
  )
}

export default CreateAccountView
