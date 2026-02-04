import { useSearchStore } from "../store/useSearchStore";

const SearchBar = () => {
  const searchTerm = useSearchStore((state) => state.searchTerm);
  const setSearchTerm = useSearchStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search by title..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="border text-black p-2 rounded w-full md:w-64 mb-4"
    />
  );
};

export default SearchBar;
