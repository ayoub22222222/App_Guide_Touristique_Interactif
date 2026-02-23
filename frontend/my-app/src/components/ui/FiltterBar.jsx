import { useRef, useState, useEffect } from "react";

// ✅ Define the 4 categories directly in this file
const CATEGORIES = [
  { id: 1, name: "All", value: "All" },
  { id: 2, name: "Places", value: "Places" },
  { id: 3, name: "Hotels", value: "Hotels" },
  { id: 4, name: "Transport", value: "Transport" }
];

function AnimatedCategoryTabs({
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
  }, [selectedCategory]);

  return (
    <div
      ref={containerRef}
      className="
        relative flex gap-2
        bg-neutral-200 p-1.5 rounded-full text-sm
        overflow-x-auto whitespace-nowrap
        scrollbar-hide max-w-full
        md:overflow-visible md:flex-wrap md:justify-center
      "
    >
      {/* Sliding background indicator */}
      <span
        className="
          absolute top-1.5 left-1.5 h-[calc(100%-0.75rem)]
          bg-black rounded-full shadow-md
          transition-all duration-300 ease-out
        "
        style={indicatorStyle}
      />

      {/* Category buttons */}
      {CATEGORIES.map((category) => (
        <button
          key={category.id}
          data-value={category.value}
          onClick={() => setSelectedCategory(category.value)}
          className={`
            relative z-10 px-4 py-2 rounded-full shrink-0 font-medium
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
                selectedCategory={selectedCategory}
                setSelectedCategory={handleCategoryChange}
            />
        </div>
    );
}