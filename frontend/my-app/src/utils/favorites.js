// utils/favorites.js
const FAVORITES_KEY = 'travel_favorites';

// Get all favorited items
export const getFavorites = () => {
  try {
    const items = localStorage.getItem(FAVORITES_KEY);
    return items ? JSON.parse(items) : [];
  } catch {
    return [];
  }
};

// Add item to favorites
export const addToFavorites = (item) => {
  try {
    const current = getFavorites();
    // Avoid duplicates
    if (!current.some(i => i.id === item.id)) {
      const updated = [...current, { ...item, favoritedAt: new Date().toISOString() }];
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
      return true;
    }
    return false; // Already in favorites
  } catch {
    return false;
  }
};

// Remove item from favorites
export const removeFromFavorites = (itemId) => {
  try {
    const current = getFavorites();
    const updated = current.filter(i => i.id !== itemId);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
    return true;
  } catch {
    return false;
  }
};

// Check if item is in favorites
export const isInFavorites = (itemId) => {
  const items = getFavorites();
  return items.some(i => i.id === itemId);
};

// Toggle favorite status
export const toggleFavorite = (item) => {
  if (isInFavorites(item.id)) {
    removeFromFavorites(item.id);
    return false; // Removed
  } else {
    addToFavorites(item);
    return true; // Added
  }
};