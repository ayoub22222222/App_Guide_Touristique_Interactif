export default function DashboardSearch({ search, setSearch }) {
  return (
    <div className="relative w-full max-w-2xl mb-8 mx-auto">
      <input
        type="text"
        placeholder="Search tours..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-gray-200 rounded-full py-4 pl-6 pr-24 outline-none focus:ring-2 focus:ring-orange-400"
      />
      <button
        type="button"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 text-white px-6 py-2 rounded-full"
      >
        Search
      </button>
    </div>
  );
}