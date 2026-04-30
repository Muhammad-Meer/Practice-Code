import React from 'react'
import { useNavigate, Link  } from 'react-router'
import   "../auth/auth.form.scss"
const Login = () => {

  const handleSubmit = (e)  => {
  e.preventDefault()
  }

  const navigate = useNavigate()
  return (
    <>
      <main>
        <div className="form-container">

          <h1>Login Form</h1>

          <form onSubmit={handleSubmit}>

            <div className='input-group'>
              <label htmlFor="email">Email</label>
              <input type="email" id='email' name='email' placeholder='Enter your Email' />
            </div>

            <div className='input-group'>
              <label htmlFor="password">Password</label>
              <input type="password" id='password' name='password' placeholder='Enter your Password' />
            </div>

            <button className='button button-primary'>button</button>

          </form>

          <p>Don't have an account? <Link to={"/register"}>Register</Link></p>
        </div>
      </main>
    </>
  )
}

export default Login