import React from "react";
import morocco from "../../assets/morocco.jpg";

export default function LoginSection() {
  return (
    <section className="p-4 bg-gray-300 w-[800px] rounded-2xl flex flex-row gap-4 mx-auto">
      <div className="flex-1 p-2">
        <h1 className="font-semibold p-1 font-heading text-xl">Sign up to see more</h1>
        <p className="pb-2 font-heading">Simplify your trip, save your time and money</p>
        <form className="flex flex-col space-y-3 p-2 font-heading" action="/submit" method="post">
          <label>Firstname</label>
          <input className="bg-white w-[250px] border rounded-xl text-lg" type="text" name="firstname" required />
          <label>Lastname</label>
          <input className="bg-white w-[250px] border rounded-xl text-lg" type="text" name="lastname" required />
          <label>Email</label>
          <input className="bg-white w-[250px] border rounded-xl text-lg" type="email" name="email"required />
          <label>Password</label>
          <input className="bg-white w-[250px] border rounded-xl text-lg" type="password"/>
        </form>
        <button className="bg-secondary font-heading w-60 rounded-xl p-1 mt-3">Login</button>
      </div>
      <div className="flex-1 rounded-2xl overflow-hidden">
        <img src={morocco} alt="" className="object-cover w-full h-full rounded-2xl"/>
      </div>
    </section>
  );
};

