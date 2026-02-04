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

  const priorityColors = {
    high: "#dc2626",
    medium: "#ca8a04",
    low: "#16a34a",
  };

  const completedColor = "#6b7280";
  const completedBg = "#f9fafb";

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
      className={`relative flex flex-col justify-between border p-4 rounded shadow-md w-64`}
      style={{
        borderColor: task.completed ? completedColor : priorityColors[priority],
        backgroundColor: task.completed ? completedBg : "#fff",
        color: task.completed ? completedColor : priorityColors[priority],
      }}
    >
      {/* Priority Flag */}
      {!task.completed && (
        <div
          className="absolute top-0 right-0 w-0 h-0 border-l-20 border-l-transparent border-b-20"
          style={{ borderBottomColor: priorityColors[priority] }}
        />
      )}

      {/* Title and Priority */}
      {task.completed ? (
        <section className="flex flex-col">
          <span className="mb-2 underline" style={{ color: completedColor }}>
            {title}
          </span>
          <span className="mb-2" style={{ color: completedColor }}>
            Priority: {priority}
          </span>
        </section>
      ) : (
        <>
          <input
            className="border p-1 w-full mb-2"
            type="text"
            value={title}
            onChange={handleTitleChange}
            style={{ color: priorityColors[priority] }}
          />
          <select
            className="border p-1 w-full mb-3"
            value={priority}
            onChange={handlePriorityChange}
            style={{ color: priorityColors[priority] }}
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
