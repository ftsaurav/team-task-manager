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
  <div className="bg-red-500 text-white p-10 text-3xl">
  Tailwind Working
</div>
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-[400px]"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>


        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <button className="w-full bg-black text-white p-3 rounded">
          Login
        </button>
        <p className="text-center mt-4">
          Don't have an account?
          <span
            onClick={() => navigate("/register")}
            className="text-blue-500 cursor-pointer ml-1"
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
