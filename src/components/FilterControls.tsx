import React from "react";
import { useTasks } from "../context/TaskContext";
import type { FilterType } from "../types/task";

const FilterControls: React.FC = () => {
  const { filter, setFilter } = useTasks();

  const filters: FilterType[] = ["all", "pending", "completed"];

  return (
    <div className="flex space-x-2 mb-6 bg-white p-3 rounded-lg shadow">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-colors ${
            filter === f
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default FilterControls;
