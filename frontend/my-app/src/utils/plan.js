// utils/plan.js
const PLAN_KEY = 'travel_plan_items';

// Get all planned items
export const getPlanItems = () => {
  try {
    const items = localStorage.getItem(PLAN_KEY);
    return items ? JSON.parse(items) : [];
  } catch {
    return [];
  }
};

// Add item to plan
export const addToPlan = (item) => {
  try {
    const current = getPlanItems();
    // Avoid duplicates
    if (!current.some(i => i.id === item.id)) {
      const updated = [...current, { 
        ...item, 
        addedAt: new Date().toISOString(),
        type: item.type || 'place' // Default type if not provided
      }];
      localStorage.setItem(PLAN_KEY, JSON.stringify(updated));
      return true;
    }
    return false; // Already in plan
  } catch {
    return false;
  }
};

// Remove item from plan
export const removeFromPlan = (itemId) => {
  try {
    const current = getPlanItems();
    const updated = current.filter(i => i.id !== itemId);
    localStorage.setItem(PLAN_KEY, JSON.stringify(updated));
    return true;
  } catch {
    return false;
  }
};

// Check if item is in plan
export const isInPlan = (itemId) => {
  const items = getPlanItems();
  return items.some(i => i.id === itemId);
};