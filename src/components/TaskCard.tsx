import { useState } from "react";
import { useTaskStore } from "../store/useTaskStore";
import type { Task } from "../types/Task";
import { Confirmation } from "./Confirmation";
import { CardButtons } from "./CardButtons";

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
    ? "border-[#6b7280] bg-[#f9fafb] text-[#6b7280]"
    : "";

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTitle(value);
    updateTask(task.id, { title: value });
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as Task["priority"];
    setPriority(value);
    updateTask(task.id, { priority: value });
  };

  const handleDelete = () => {
    deleteTask(task.id);
    setShowConfirm(false);
  };

  return (
    <div
      className={`flex flex-col justify-between border p-4 rounded shadow-md w-64 ${
        task.completed ? completedStyles : priorityStyles[priority]
      }`}
    >
      {task.completed ? (
        <section className="flex flex-col">
          <span className="mb-2">{title}</span>
          <span className="mb-2">Priority: {priority}</span>
        </section>
      ) : (
        <>
          <input
            className="border p-1 w-full mb-2 text-black"
            type="text"
            value={title}
            onChange={handleTitleChange}
            disabled={task.completed}
          />
          <select
            className="border p-1 w-full mb-3 text-black"
            value={priority}
            onChange={handlePriorityChange}
            disabled={task.completed}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </>
      )}
      <CardButtons
        task={task}
        updateTask={updateTask}
        setShowConfirm={setShowConfirm}
        handleDelete={handleDelete}
      />
      {showConfirm && (
        <Confirmation
          handleDelete={handleDelete}
          setShowConfirm={setShowConfirm}
        />
      )}
    </div>
  );
};

export default TaskCard;
