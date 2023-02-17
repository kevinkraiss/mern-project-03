import { useState } from "react"
import { LOGIN } from "../utils/mutations"
import { useMutation } from "@apollo/client"
import Auth from '../utils/auth'

const Login = ({setCurrentPage}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [login, { loading, error }] = useMutation(LOGIN)

  const handleSubmit = async e => {
    e.preventDefault()
    const { data } = await login({
      variables: {
        email,
        password,
      }
    })
    console.log(data)
    Auth.login(data.login.token)
    setCurrentPage('Home')
  }
  
  return (
    <main className="flex-row justify-center mb-4">
    <div className="card-body">
    <h1>Login</h1>
    {data ? (
        <p>
          Success! You may now head{' '}
          <Link to="/">back to the homepage.</Link>
        </p>
      ) : (
    <form id="login-form" onSubmit={handleFormSubmit}>
      <p>Please enter your user credentials to continue.</p>
      <input 
        className="form-input"
        placeholder="Your email"
        name="email"
        type="email"
        value={formState.email}
        onChange={handleChange}
      />
      <input 
        className="form-input"
        placeholder="******"
        name="password"
        type="password"
        value={formState.password}
        onChange={handleChange}
      />
      <button type="sumbit">Login</button>
    </form>
      )}
    {error && (
        <div className="my-3 p-3 bg-danger text-white">
          {error.message}
        </div>
      )}
    </div>
    </main>
  );
};


export default Login;