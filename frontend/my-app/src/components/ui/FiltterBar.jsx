// sallman

import { useRef, useState, useEffect } from "react";
import { categories } from "../../Data/Data";

function AnimatedCategoryTabs({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  const containerRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    transform: "translateX(0px)",
  });

  useEffect(() => {
    const activeBtn = containerRef.current?.querySelector(
      `[data-value="${selectedCategory}"]` 
    );

    if (activeBtn) {
      setIndicatorStyle({
        width: activeBtn.offsetWidth + "px",
        transform: `translateX(${activeBtn.offsetLeft}px)`,
      });
    }
  }, [selectedCategory, categories]);

  return (
    <div
      ref={containerRef}
      className="
        relative flex gap-5
        bg-neutral-200 p-2 rounded-full text-sm
        overflow-x-auto whitespace-nowrap
        scrollbar-hide max-w-full
        md:overflow-visible md:flex-wrap md:justify-center
      "
    >
      {/* Sliding background */}
      <span
        className="
          absolute top-2 left-2 h-[calc(100%-1rem)]
          bg-black rounded-full shadow-md
          transition-all duration-300 ease-out
        "
        style={indicatorStyle}
      />

      {/* Buttons */}
      {categories.map((category) => (
        <button
          key={category.id}
          data-value={category.value}
          onClick={() => setSelectedCategory(category.value)}
          className={`
            relative z-10 px-5 py-2 rounded-full shrink-0 font-medium
            transition-all duration-300
            ${
              selectedCategory === category.value
                ? "text-white scale-105"
                : "text-neutral-600 hover:text-black hover:scale-105"
            }
            active:scale-95
          `}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default function FilterBar({ onFilterChange, activeCategory = "All" }) {
    const [selectedCategory, setSelectedCategory] = useState(activeCategory);
    
    const handleCategoryChange = (categoryValue) => {
        setSelectedCategory(categoryValue);
        if (onFilterChange) {
            onFilterChange(categoryValue);
        }
    };

    return (
        <div className="w-full flex justify-center px-4">
            <AnimatedCategoryTabs
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={handleCategoryChange}
            />
        </div>
    );
}