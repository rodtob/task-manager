import { useState } from "react";

export const CardButtons = ({ task, updateTask, deleteTask }: any) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = () => {
    deleteTask(task.id);
    setShowConfirm(false);
  };

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

      {showConfirm && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow w-80">
            <p className="text-black mb-4">
              Are you sure you want to delete this task?
            </p>
            <div className="flex gap-2 justify-end">
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Yes
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="bg-gray-300 px-3 py-1 rounded"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
