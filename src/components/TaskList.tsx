import React from "react";
import TaskItem from "./TaskItem";
import { useTasks } from "../context/TaskContext";

const TaskList: React.FC = () => {
  const { filteredTasks, searchTerm } = useTasks();

  return (
    <div className="space-y-3">
      {filteredTasks.length === 0 ? (
        <div className="text-center py-6 bg-white rounded-lg shadow">
          <p className="text-gray-500">
            {searchTerm
              ? "No tasks match your search criteria."
              : "No tasks found. Add a new task to get started!"}
          </p>
        </div>
      ) : (
        <>
          {searchTerm && (
            <p className="text-sm text-gray-500 mb-2">
              Showing {filteredTasks.length} task
              {filteredTasks.length !== 1 ? "s" : ""} matching "{searchTerm}"
            </p>
          )}
          {filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </>
      )}
    </div>
  );
};

export default TaskList;
