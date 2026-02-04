export const CardButtons = ({ task, updateTask, setShowConfirm }: any) => {
  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={() => updateTask(task.id, { completed: !task.completed })}
        className="w-full mb-2 bg-[#16a34a] text-white py-1 rounded hover:opacity-90"
      >
        {task.completed ? "Task is Completed" : "Mark as Completed"}
      </button>

      <button
        onClick={() => setShowConfirm(true)}
        className="w-full bg-[#dc2626] text-white py-1 rounded hover:opacity-90"
      >
        Delete
      </button>
    </div>
  );
};
