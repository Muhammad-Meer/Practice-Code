import React from 'react'
import   "../auth/auth.form.scss"
const Login = () => {



  const handelSubmit = (e)  => {
  e.preventDefault()
  }
  return (
    <>
      <main>
        <div className="form-container">

          <h1>Login From</h1>

          <form onSubmit={handelSubmit}>

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
        </div>
      </main>
    </>
  )
}

export default Login