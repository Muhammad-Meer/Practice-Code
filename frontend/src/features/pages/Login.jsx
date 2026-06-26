import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import "../auth/auth.form.scss"
import { useAuth } from '../auth/hooks/useauth'

const Login =  () => {


  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const navigate = useNavigate()

  const { loading, handleLogin } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
     await handleLogin({ email, password })
     navigate('/')
  }


  if (loading) {
    return <main><h1>Loading...</h1></main>
  }

  return (
    <>
      <main>
        <div className="form-container">

          <h1>Login Form</h1>

          <form onSubmit={handleSubmit}>

            <div className='input-group'>
              <label htmlFor="email">Email</label>

              <input
                type="email"
                id='email'
                name='email'
                placeholder='Enter your Email'
                onChange={(e) => setemail(e.target.value)}
              />
            </div>

            <div className='input-group'>
              <label htmlFor="password">Password</label>

              <input
                type="password"
                id='password'
                name='password'
                placeholder='Enter your Password'
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>

            <button className='button button-primary'>
              button
            </button>

          </form>

          <p>
            Don't have an account?
            <Link to={"/register"}>Register</Link>
          </p>

        </div>
      </main>
    </>
  )
}

export default Login