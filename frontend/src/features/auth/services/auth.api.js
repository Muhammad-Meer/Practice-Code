import axios from 'axios'


const api = axios.create({
  baseURL: "http://localhost:3200",
  withCredentials: true

})

 export async function register(username, email, password) {
  try {
    const response = await api.post("/api/auth/register",
      { username, email, password },   // body (data)
    )

    console.log(response.data)
  } catch (error) {
    console.log(error.response?.data || error.message)
  }
}

 export async function login(email, password) {
  try {
    const response = await api.post("/api/auth/login",
      { email, password },   // body (data)
    )

    console.log(response.data)
  } catch (error) {
    console.log(error.response?.data || error.message)
  }
}

 export async function logout() {
  try {
    const response = await axios.get("/api/auth/login",
    )

    console.log(response.data)
  } catch (error) {
    console.log(error.response?.data || error.message)
  }
}

 export async function getme() {
  try {
    const response = await api.get("/api/auth/get-me"
    )
    return response.data

  } catch (error) {
    console.log(error)
  }
}
 
