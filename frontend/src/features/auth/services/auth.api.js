import axios from 'axios'

async function register(username, email, password) {
  try {
    const response = await axios.post(
      "http://localhost:3200/api/auth/register",
      { username, email, password },   // body (data)
      { withCredentials: true }        // config
    )

    console.log(response.data)
  } catch (error) {
    console.log(error.response?.data || error.message)
  }
}

async function login( email, password) {
  try {
    const response = await axios.post(
      "http://localhost:3200/api/auth/login",
      {  email, password },   // body (data)
      { withCredentials: true }        // config
    )

    console.log(response.data)
  } catch (error) {
    console.log(error.response?.data || error.message)
  }
}

async function logout() {
  try {
    const response = await axios.post(
      "http://localhost:3200/api/auth/login", 
      { withCredentials: true }        // config
    )

    console.log(response.data)
  } catch (error) {
    console.log(error.response?.data || error.message)
  }
}