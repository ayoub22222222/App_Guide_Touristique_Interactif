import React from "react";

export default function FormLayout() {
  const inputClass =
    "w-full rounded-md bg-[#D9D9D9] px-4 py-3 text-sm outline-none placeholder:text-gray-600 focus:ring-2 focus:ring-black/30";

  return (
    <div className="order-2 md:order-1 rounded-2xl bg-[#F5F5F5] p-6 shadow-md">
      <form className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <input className={inputClass} placeholder="first name" />
          <input className={inputClass} placeholder="last name" />
        </div>

        <input className={inputClass} placeholder="email" />
        <input className={inputClass} placeholder="Phone Number" />
        <input className={inputClass} placeholder="Subject" />

        <textarea
          rows="6"
          className={`${inputClass} resize-none`}
          placeholder="Message"
        />

        <button
          type="submit"
          className="mx-auto mt-2 block w-40 rounded-full bg-black py-3 text-sm font-semibold text-white hover:bg-orange-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
