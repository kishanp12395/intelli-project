import { useState } from "react";
import axios from "axios";
import InputField from "../components/InputField.jsx";
import Button from "../components/Button.jsx";
import Message from "../components/Message.jsx";

const Register = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setFormData({ email: "", password: "" });
    try {
      const res = await axios.post(import.meta.env.VITE_API_BASE_URL, formData,{
        withCredentials: true,
      });
      setMessage(res.data.message);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <InputField
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button type="submit" text="Register" />
        </form>
        <Message text={message} type="success" />
        <Message text={error} type="error" />
      </div>
    </div>
  );
};

export default Register;
