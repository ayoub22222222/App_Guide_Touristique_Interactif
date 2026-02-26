import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import morocco from "../../assets/morocco.jpg";
import { saveSession } from "../../utils/auth";

const API_URL = "http://localhost:5000/users";

export default function LoginSection() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setForm({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    const endpoint = mode === "register" ? "/register" : "/login";
    const payload =
      mode === "register"
        ? form
        : { email: form.email, password: form.password };

    try {
      const res = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Authentication failed");
      }

      if (mode === "register") {
        resetForm();
        setMode("login");
        setSuccess("Account created successfully. Please login.");
      } else {
        saveSession(data.token, data.user);
        resetForm();
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-4 bg-gray-300 w-[900px] rounded-2xl flex flex-row gap-4 mx-auto">
      <div className="flex-1 p-2">
        <div className="flex gap-2 mb-4">
          <button
            type="button"
            onClick={() => setMode("login")}
            className={`px-4 py-2 rounded-lg ${mode === "login" ? "bg-black text-white" : "bg-white text-black"}`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => setMode("register")}
            className={`px-4 py-2 rounded-lg ${mode === "register" ? "bg-black text-white" : "bg-white text-black"}`}
          >
            Register
          </button>
        </div>

        <h1 className="font-semibold p-1 font-heading text-xl">
          {mode === "register" ? "Create your account" : "Welcome back"}
        </h1>
        <p className="pb-2 font-heading">Simplify your trip, save your time and money</p>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 p-2 font-heading">
          {mode === "register" && (
            <>
              <label>Firstname</label>
              <input
                className="bg-white w-[250px] border rounded-xl text-lg"
                type="text"
                name="firstname"
                value={form.firstname}
                onChange={handleChange}
                required
              />
              <label>Lastname</label>
              <input
                className="bg-white w-[250px] border rounded-xl text-lg"
                type="text"
                name="lastname"
                value={form.lastname}
                onChange={handleChange}
                required
              />
            </>
          )}

          <label>Email</label>
          <input
            className="bg-white w-[250px] border rounded-xl text-lg"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            className="bg-white w-[250px] border rounded-xl text-lg"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            minLength={6}
            required
          />

          <button
            className="bg-secondary font-heading w-60 rounded-xl p-1 mt-3 disabled:opacity-60"
            type="submit"
            disabled={loading}
          >
            {loading ? "Please wait..." : mode === "register" ? "Register" : "Login"}
          </button>
        </form>

        {success && <p className="text-green-600 font-semibold mt-2">{success}</p>}
        {error && <p className="text-red-600 font-semibold mt-2">{error}</p>}
      </div>

      <div className="flex-1 rounded-2xl overflow-hidden">
        <img src={morocco} alt="Travel" className="object-cover w-full h-full rounded-2xl" />
      </div>
    </section>
  );
}
