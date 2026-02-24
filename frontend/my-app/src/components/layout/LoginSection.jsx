import React, { useState } from "react";
import morocco from "../../assets/morocco.jpg";

export default function LoginSection() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  })
  const [success, setSuccess] = useState(false)
  
  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
    console.log("user sent:", form)
    if (res.ok) {
      setSuccess(true)
      setForm({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      })
    }
  }
  return (
    <section className="p-4 bg-gray-300 w-[800px] rounded-2xl flex flex-row gap-4 mx-auto">
      <div className="flex-1 p-2">
        <h1 className="font-semibold p-1 font-heading text-xl">Sign up to see more</h1>
        <p className="pb-2 font-heading">Simplify your trip, save your time and money</p>
        <form id="signupForm" onSubmit={handleSubmit} className="flex flex-col space-y-3 p-2 font-heading">
          <label>Firstname</label>
          <input className="bg-white w-[250px] border rounded-xl text-lg" type="text" name="firstname" value={form.firstname} onChange={handleChange} required />
          <label>Lastname</label>
          <input className="bg-white w-[250px] border rounded-xl text-lg" type="text" name="lastname" value={form.lastname} onChange={handleChange} required />
          <label>Email</label>
          <input className="bg-white w-[250px] border rounded-xl text-lg" type="email" name="email" value={form.email} onChange={handleChange} required />
          <label htmlFor="password">Password</label>
          <input className="bg-white w-[250px] border rounded-xl text-lg" type="password" name="password" value={form.password} onChange={handleChange} required/>
        </form>
        <button form="signupForm" className="bg-secondary font-heading w-60 rounded-xl p-1 mt-3" type="submit">Login</button>
        {success && (
  <p className="text-green-600 font-semibold mt-2">
    User created successfully ✅
  </p>
)}
      </div>
      <div className="flex-1 rounded-2xl overflow-hidden">
        <img src={morocco} alt="" className="object-cover w-full h-full rounded-2xl"/>
      </div>
      
    </section>
  );
};

