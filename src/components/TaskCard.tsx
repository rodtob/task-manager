import { useState } from "react";
import { useTaskStore } from "../store/useTaskStore";
import type { Task } from "../types/Task";
import { CardButtons } from "./CardButtons";

const TaskCard = ({ task }: { task: Task }) => {
  const updateTask = useTaskStore((state) => state.updateTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);

  const [title, setTitle] = useState(task.title);
  const [priority, setPriority] = useState(task.priority);

  const priorityColors = {
    high: "#dc2626",
    medium: "#ca8a04",
    low: "#16a34a",
  };

  const completedColor = "#6b7280";
  const completedBg = "#f9fafb";
  const formattedDate = new Date(task.createdAt).toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

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

  return (
    <div
      className={`relative flex flex-col justify-between border p-4 rounded shadow-md w-64`}
      style={{
        borderColor: task.completed ? completedColor : priorityColors[priority],
        backgroundColor: task.completed ? completedBg : "#fff",
        color: task.completed ? completedColor : priorityColors[priority],
      }}
      data-testid={`task-${task.id}`}
    >
      {!task.completed && (
        <div
          className="absolute top-0 right-0 w-0 h-0 border-l-20 border-l-transparent border-b-20"
          style={{ borderBottomColor: priorityColors[priority] }}
        />
      )}

      {task.completed ? (
        <section className="flex flex-col">
          <span className="mb-2 line-through" style={{ color: completedColor }}>
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
            data-testid={`task-title-${task.id}`}
            style={{ color: priorityColors[priority] }}
          />
          <select
            className="border p-1 w-full mb-3"
            value={priority}
            onChange={handlePriorityChange}
            style={{ color: priorityColors[priority] }}
            data-testid={`task-priority-${task.id}`}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <span className="text-xs mb-2">
            Created at:{" "}
            {formattedDate}
          </span>
        </>
      )}
      <CardButtons
        task={task}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default TaskCard;
