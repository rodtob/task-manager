import { useFilterStore } from "../store/useFilterStore";

const FilterBar = () => {
  const filter = useFilterStore((state) => state.filter);
  const setFilter = useFilterStore((state) => state.setFilter);

  return (
    <div className="flex gap-2">
      {["all", "completed", "incomplete"].map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f as "all" | "completed" | "incomplete")}
          className={`px-3 m-2 py-1 rounded ${
            filter === f ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          {f[0].toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
