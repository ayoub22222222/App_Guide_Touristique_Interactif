import { useState } from "react";
import React from "react";
// import { Heart } from "lucide-react";

export default function FavoriteButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className="flex items-center gap-2 px-3 py-1 rounded-md text-sm transition-all duration-200"
      style={{
        backgroundColor: liked ? "#FF9100" : "black",
        color: "white",
        border: liked ? "1px solid #FF9100" : "1px solid black"
      }}
    >
      {/* <Heart
        size={16}
        style={{
          fill: liked ? "white" : "none",
          stroke: "white"
        }}
      /> */}
      Favorite
    </button>
  );
}
