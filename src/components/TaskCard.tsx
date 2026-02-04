import { useState } from "react";
import { useTaskStore } from "../store/useTaskStore";

const TaskCard = ({ task }) => {
  const updateTask = useTaskStore((state) => state.updateTask);

  const [title, setTitle] = useState(task.title);
  const [priority, setPriority] = useState(task.priority);

  const priorityStyles = {
    high: "border-red-600 bg-red-100",
    medium: "border-yellow-600 bg-yellow-100",
    low: "border-green-600 bg-green-100",
  };

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
        priorityStyles[priority]
      }`}
    >
      <input
        className="border p-1 w-full mb mb-2 text-black"
        type="text"
        value={title}
        onChange={handleTitleChange}
      />

      <select
        className="border p-1 w-full text-black"
        value={priority}
        onChange={handlePriorityChange}
      >
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
  );
};

export default TaskCard;
