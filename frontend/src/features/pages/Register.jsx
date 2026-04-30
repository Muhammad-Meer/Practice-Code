import React from 'react'
import "../auth/auth.form.scss"
import { useNavigate, Link  } from 'react-router'
const Register = () => {



  const handelSubmit = (e) => {
    e.preventDefault()
  }

    const navigate = useNavigate()

  return (
    <>
      <main>
        <div className="form-container">

          <h1>Register From</h1>

          <form onSubmit={handelSubmit}>



            <div className='input-group'>
              <label htmlFor="username">Name</label>
              <input type="text" id='username' name='username' placeholder='Enter your username' />
            </div>


            <div className='input-group'>
              <label htmlFor="email">Email</label>
              <input type="email" id='email' name='email' placeholder='Enter your Email' />
            </div>


            <div className='input-group'>
              <label htmlFor="password">Password</label>
              <input type="password" id='password' name='password' placeholder='Enter your Password' />
            </div>

            <button className='button button-primary'>Register</button>

          </form>

           <p>Already have in account? <Link to={"/login"}>Login</Link></p>

        </div>
      </main>
    </>
  )
}

export default Register