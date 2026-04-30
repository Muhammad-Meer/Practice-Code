import axios from 'axios'


 const api = axios.create({
  baseURL: "http://localhost:3200",
  withCredentials: true

})

async function register(username, email, password) {
  try {
    const response = await api.post("/api/auth/register",
      { username, email, password },   // body (data)
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
    const response = await axios.get(
      "http://localhost:3200/api/auth/login", 
      { withCredentials: true }        // config
    )

    console.log(response.data)
  } catch (error) {
    console.log(error.response?.data || error.message)
  }
}

async function getme() {
  try {
    const response = await axios.get(

    )
  } catch (error) {
    console.log(error)
  }
}