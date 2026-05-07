import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../api/authApi";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

function LoginPage() {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(formData);

      login(response.token);
      toast.success("Login Successful");

      navigate("/dashboard");
    } catch (err) {
      toast.error(
    err.response?.data?.message ||
    "Login Failed"
);
    }
  };
  
  return (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="bg-red-500 text-white p-10 text-5xl rounded-xl">
      Tailwind Working
    </div>
  </div>
)
}

export default LoginPage;
