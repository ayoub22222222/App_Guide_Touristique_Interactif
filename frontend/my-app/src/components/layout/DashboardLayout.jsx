import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

export default function DashboardLayout({ children }) {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    navigate("/Login");
  };

  return (
    <div className=" md:min-h-screen md:bg-gray-100 md:p-6">
      <div className="max-w-[1600px] mx-auto flex gap-6 h-[calc(100vh-3rem)]">

        {/* SIDEBAR */}
        <aside className="w-64 bg-gray-200 rounded-3xl p-6 flex flex-col h-full">

          {/* PROFILE */}
          <div className="flex flex-col items-center mb-6">
            <div
              className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center mb-2 text-3xl overflow-hidden cursor-pointer"
              onClick={handleImageClick}
            >
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                "👤"
              )}
            </div>

            <p
              className="text-sm text-gray-600 cursor-pointer hover:text-orange-500"
              onClick={handleImageClick}
            >
              Changer photo
            </p>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
            />
          </div>

        
          <div className="border-b border-orange-400 mb-6" />

          {/* MENU */}
          <div className="flex-1 flex items-center">
            <nav className="space-y-8 text-gray-800 w-full">

              <div
                onClick={() => navigate("/dashboard")}
                className="cursor-pointer hover:text-orange-500 text-lg px-4"
              >
                 Profil
              </div>

              <div className="cursor-pointer hover:text-orange-500 text-lg px-4">
                Feedback
              </div>

              <div
                onClick={() => navigate("/")}
                className="cursor-pointer hover:text-orange-500 text-lg px-4"
              >
                Home Page
              </div>
<div
  onClick={() => navigate("/favorites")}  // ✅ Add navigation
  className="cursor-pointer hover:text-orange-500 text-lg px-4"
>
  Favorite
</div>
            </nav>
          </div>

        
          <div className="mt-auto pt-6 border-t border-orange-400">

            <button
              onClick={handleLogout}
              className="flex items-center gap-3 text-gray-800 hover:text-red-500 transition font-medium px-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                <polyline points="16 17 21 12 16 7"/>
                <line x1="21" y1="12" x2="9" y2="12"/>
              </svg>

              <span className="text-lg">Logout</span>
            </button>

          </div>

        </aside>

        {/* CONTENT */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>

      </div>
    </div>
  );
}
