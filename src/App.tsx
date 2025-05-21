import React from "react";
import { TaskProvider } from "./context/TaskContext";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterControls from "./components/FilterControls";
import SearchBar from "./components/SearchBar";

const App: React.FC = () => {
  return (
    <TaskProvider>
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-2  lg:grid-cols-[30%_65%] gap-12 px-5 bg-gray-100 py-8">
        <div className="">
          <h1 className="text-2xl font-bold  text-center">Task Manager</h1>
          <p className="text-gray-600 mb-4 text-center">
            Organize and find your tasks efficiently
          </p>
          <TaskForm />
        </div>
        <div className="">
          <SearchBar />
          <FilterControls />
          <TaskList />
        </div>
      </div>
    </TaskProvider>
  );
};

export default App;
