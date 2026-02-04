import { useState } from "react";
import { useTaskStore } from "../store/useTaskStore";
import type { Task } from "../types/Task";

const TaskCard = ({ task }: { task: Task }) => {
  const updateTask = useTaskStore((state) => state.updateTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);
    const [showConfirm, setShowConfirm] = useState(false);

  const [title, setTitle] = useState(task.title);
  const [priority, setPriority] = useState(task.priority);

  const priorityStyles = {
    high: "border-[#dc2626] bg-red-50 text-[#dc2626]",
    medium: "border-[#ca8a04] bg-yellow-50 text-[#ca8a04]",
    low: "border-[#16a34a] bg-green-50 text-[#16a34a]",
  };

  const completedStyles = task.completed
    ? "border-[#6b7280] bg-[#f9fafb] text-[#6b7280] line-through"
    : "";

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
    updateTask(task.id, { title: value });
  };

  const handlePriorityChange = (e) => {
    const value = e.target.value;
    setPriority(value);
    updateTask(task.id, { priority: value });
  };

  const handleDelete = () => {
    deleteTask(task.id);
    setShowConfirm(false);
  }

  return (
    <div
      className={`border p-4 rounded shadow-md w-64 ${
        task.completed ? completedStyles : priorityStyles[priority]
      }`}
    >
      <input
        className="border p-1 w-full mb-2 text-black line-through:text-[#6b7280]"
        type="text"
        value={title}
        onChange={handleTitleChange}
      />

      <select
        className="border p-1 w-full mb-3 text-black"
        value={priority}
        onChange={handlePriorityChange}
      >
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      <button
        onClick={() =>
          updateTask(task.id, { completed: !task.completed })
        }
        className="w-full mb-2 bg-[#16a34a] text-white py-1 rounded hover:opacity-90"
      >
        {task.completed ? "Complete" : "Incomplete"}
      </button>

      <button
        onClick={() => setShowConfirm(true)}
        className="w-full bg-[#dc2626] text-white py-1 rounded hover:opacity-90"
      >
        Delete
      </button>
      {showConfirm && (
  <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
    <div className="bg-white p-4 rounded shadow">
      <p>Are you sure you want to delete this task?</p>
      <div className="flex gap-2 mt-2">
        <button onClick={handleDelete} className="bg-red-600 text-white px-3 py-1 rounded">Yes</button>
        <button onClick={() => setShowConfirm(false)} className="bg-gray-300 px-3 py-1 rounded">No</button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default TaskCard;
