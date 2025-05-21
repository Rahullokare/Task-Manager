import React, { useState, useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import { FiSearch, FiX } from "react-icons/fi";

const SearchBar: React.FC = () => {
  const { searchTerm, setSearchTerm } = useTasks();
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  // Debounce the search input to avoid excessive re-renders
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(localSearchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [localSearchTerm, setSearchTerm]);

  const clearSearch = () => {
    setLocalSearchTerm("");
    setSearchTerm("");
  };

  return (
    <div className="relative mb-4">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FiSearch className="text-gray-400" />
      </div>
      <input
        type="text"
        value={localSearchTerm}
        onChange={(e) => setLocalSearchTerm(e.target.value)}
        placeholder="Search tasks..."
        className="w-full pl-10 pr-8 bg-white py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      {localSearchTerm && (
        <button
          onClick={clearSearch}
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
          aria-label="Clear search"
        >
          <FiX className="text-gray-400 hover:text-gray-600" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
