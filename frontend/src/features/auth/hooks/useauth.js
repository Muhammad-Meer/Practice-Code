import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { useEffect } from "react";
import { login, register, logout, getme } from "../services/auth.api";
export const useAuth = () => {

  
  const context = useContext(AuthContext);


  if (!context) {
  throw new Error("useAuth must be used within AuthProvider");
}



  const { user, setuser, loading, setloading } = context;

  const handleLogin = async ({ email, password }) => {
    try {
      setloading(true);

      const data = await login(email, password);

      setuser(data);

    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  // REGISTER
  const handleRegister = async ({ username, email, password }) => {
    try {
      setloading(true);

      const data = await register(username, email, password);

      setuser(data.user);

    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  // LOGOUT
  const handleLogout = async () => {
    try {
      setloading(true);

      await logout();

      setuser(null);

    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };


  
useEffect(() => {

  const getAndsetUser = async () => {
    try {
      const data = await getme()
      setuser(data.user)
    } catch (error) {
      console.log(error)
    } finally {
      setloading(false)
    }
  }

  getAndsetUser()

}, [])


  return {
    user,
    loading,
    handleLogin,
    handleRegister,
    handleLogout,
  };
};