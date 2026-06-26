import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context";
import { login, register, logout, getme } from "../services/auth.api";

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  const { user, setuser, loading, setloading } = context;

  // LOGIN
  const handleLogin = async ({ email, password }) => {
    try {
      setloading(true);

      const data = await login(email, password);

      // Agar backend response { user: {...} } hai
      setuser(data.user);

      return true;
    } catch (error) {
      console.log(error);
      return false;
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

      return true;
    } catch (error) {
      console.log(error);
      return false;
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

  // GET LOGGED IN USER
  useEffect(() => {
    const getAndSetUser = async () => {
      try {
        setloading(true);

        const data = await getme();

        if (data?.user) {
          setuser(data.user);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    };

    getAndSetUser();
  }, []);

  return {
    user,
    loading,
    handleLogin,
    handleRegister,
    handleLogout,
  };
};