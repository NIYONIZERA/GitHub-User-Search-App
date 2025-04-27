import { useState } from "react";
import { Search } from "lucide-react";

function SearchBar({ fetchUser, error }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      fetchUser(input.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-[#1E2A47] p-2 rounded-2xl flex items-center shadow mb-6">
      <Search className="text-blue-500 ml-3" />
      <input
        type="text"
        className="bg-transparent flex-1 px-3 py-2 outline-none text-sm placeholder-gray-400 dark:placeholder-gray-300"
        placeholder="Search GitHub username..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {error && <p className="text-red-500 text-xs mr-3">No results</p>}
      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 mr-2 text-sm">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
