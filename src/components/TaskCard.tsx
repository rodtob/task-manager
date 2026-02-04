import { useState } from "react";

const TaskCard = () => {
  const [title, setTitle] = useState("New Task");
  const [priority, setPriority] = useState("medium");

  const priorityStyles = {
    high: "border-red-600 bg-red-100",
    medium: "border-yellow-600 bg-yellow-100",
    low: "border-green-600 bg-green-100",
  };

  return (
    <div
      className={`border p-4 rounded shadow-md w-64 ${
        priorityStyles[priority]
      }`}
    >
      <input
        className="border p-1 w-full mb-2 text-black"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        className="border p-1 w-full  text-black"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
  );
};

export default TaskCard;
