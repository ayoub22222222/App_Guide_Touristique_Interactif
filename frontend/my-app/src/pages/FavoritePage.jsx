// pages/FavoritePage.jsx
import { useState, useEffect } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import DashboardSearch from "../components/ui/DashboardSearch";
import ProductCard from "../components/common/ProductCard";
import BtnProduct from "../components/common/BtnProduct";
import { getFavorites, removeFromFavorites, addToFavorites } from "../utils/favorites";

export default function FavoritePage() {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  // Load favorites on mount
  useEffect(() => {
    const items = getFavorites();
    setFavorites(items);
  }, []);

  // Filter by search
  const filteredItems = favorites.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.description?.toLowerCase().includes(search.toLowerCase())
  );

  // Remove from favorites
  const handleRemove = (itemId) => {
    removeFromFavorites(itemId);
    setFavorites(getFavorites()); // Refresh state
  };

  // Move back to plan (optional feature)
  const handleMoveToPlan = (item) => {
    // You could add logic here to also add to plan if needed
    console.log(`Moved ${item.name} to plan`);
  };

  return (
    <>
      <DashboardLayout>
        <DashboardSearch search={search} setSearch={setSearch} />
        
        {/* Header */}
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <h2 className="text-xl font-heading font-semibold">
            My Favorites ({favorites.length})
          </h2>
          {favorites.length > 0 && (
            <button
              onClick={() => {
                if (window.confirm('Remove all items from favorites?')) {
                  localStorage.removeItem('travel_favorites');
                  setFavorites([]);
                }
              }}
              className="text-sm text-red-600 hover:text-red-800 transition"
            >
              Clear all
            </button>
          )}
        </div>

        {/* Empty state */}
        {favorites.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">💔</div>
            <p className="text-neutral-500 text-lg">No favorites yet</p>
            <p className="text-neutral-400 mt-2">
              Add items to your favorites from the Dashboard or Product pages!
            </p>
          </div>
        ) : (
          /* Items grid */
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="flex flex-wrap gap-6 justify-center">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <div key={item.id} className="relative group">
                    <ProductCard
                      title={item.name}
                      description={item.description}
                      image={item.image}
                      type={item.type}
                    >
                      <div className="flex gap-2">
                        {/* Already favorited button */}
                        <BtnProduct
                          item={item}
                          className="bg-red-100 text-red-700 hover:bg-red-200"
                        >
                          <span>❤️ Favorited</span>
                        </BtnProduct>
                        
                        {/* Remove from favorites button */}
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="flex items-center gap-2 bg-neutral-100 text-neutral-700 px-4 py-2 rounded-lg hover:bg-neutral-200 transition"
                          title="Remove from favorites"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                          </svg>
                        </button>
                      </div>
                    </ProductCard>
                    
                    {/* Type badge */}
                    {item.type && (
                      <span className="absolute top-2 right-2 px-2 py-1 text-xs rounded-full bg-neutral-800 text-white">
                        {item.type}
                      </span>
                    )}
                    
                    {/* Favorite heart badge */}
                    <span className="absolute top-2 left-2 px-2 py-1 text-xs rounded-full bg-red-100 text-red-600">
                      ❤️
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-center w-full py-8 text-neutral-500">
                  No favorites match "{search}"
                </p>
              )}
            </div>
          </div>
        )}
      </DashboardLayout>
    </>
  );
}