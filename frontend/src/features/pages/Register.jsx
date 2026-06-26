import React from 'react'
import { useState } from 'react'
import "../auth/auth.form.scss"
import { useNavigate, Link } from 'react-router'
import { useAuth } from '../auth/hooks/useauth'


const Register = () => {

    const navigate = useNavigate()


  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState()


  const {loading, handleRegister} = useAuth()

  const handelSubmit = async (e) => {
    e.preventDefault()
  await handleRegister({username, email, password})
  navigate('/login')
  }
  if(loading) {
    return (<main> <h1>loading</h1></main>)
  }


  return (
    <>
      <main>
        <div className="form-container">

          <h1>Register From</h1>

          <form onSubmit={handelSubmit}>



            <div className='input-group'>
              <label htmlFor="username">Name</label>
              <input type="text" id='username' name='username' placeholder='Enter your username' onChange={(e) => { setusername(e.target.value) }} />
            </div>


            <div className='input-group'>
              <label htmlFor="email">Email</label>
              <input type="email" id='email' name='email' placeholder='Enter your Email' onChange={(e) => { setemail(e.target.value) }} />
            </div>


            <div className='input-group'>
              <label htmlFor="password">Password</label>
              <input type="password" id='password' name='password' placeholder='Enter your Password' onChange={(e) => { setpassword(e.target.value) }} />
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