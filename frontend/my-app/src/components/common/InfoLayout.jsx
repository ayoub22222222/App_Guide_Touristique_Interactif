import React from "react";

export default function InfoLayout() {
  return (
    <div className="order-1 md:order-2 rounded-2xl bg-gray-50 p-6 shadow-md">
      <img
        className="mx-auto h-56 w-64 rounded-2xl object-cover"
        src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
        alt="contact"
      />

      <div className="mt-6 space-y-4">
        <Info
          text="demo.user4729@example.com"
          icon={
            <svg
              className="h-5 w-5 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 6l8 7 8-7M4 6v12h16V6" />
            </svg>
          }
        />

        <Info
          text="+1 (415) 555-8392"
          icon={
            <svg className="h-5 w-5 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.54 16.88l-5.27-2.26a1.99 1.99 0 0 0-2.33.58l-2.2 2.69a15.05 15.05 0 0 1-6.8-6.8l2.69-2.2a1.99 1.99 0 0 0 .58-2.33L7.12 1.46A2 2 0 0 0 4.87.23L1.73 1.06A2 2 0 0 0 .25 3a19 19 0 0 0 20.75 20.75 2 2 0 0 0 1.94-1.48l.83-3.14a2 2 0 0 0-1.23-2.25z" />
            </svg>
          }
        />

        <Info
          text="San Francisco, CA, USA"
          icon={
            <svg
              className="h-5 w-5 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          }
        />
      </div>
    </div>
  );
}

function Info({ icon, text }) {
  return (
    <div className="flex items-center gap-3 rounded-full bg-[#D9D9D9] px-4 py-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
        {icon}
      </div>
      <span className="text-sm text-gray-700">{text}</span>
    </div>
  );
}
