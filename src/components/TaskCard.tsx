import { useState } from "react";
import { useTaskStore } from "../store/useTaskStore";

const TaskCard = ({ task }) => {
  const updateTask = useTaskStore((state) => state.updateTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);

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
        {task.completed ? "Mark as Incomplete" : "Complete task"}
      </button>

      <button
        onClick={() => deleteTask(task.id)}
        className="w-full bg-[#dc2626] text-white py-1 rounded hover:opacity-90"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskCard;
