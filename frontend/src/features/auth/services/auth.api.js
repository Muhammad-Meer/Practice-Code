import axios from 'axios'

async function registerUser(username, email, password) {
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