import { useTaskStore } from "../store/useTaskStore";

export const Header = () => {
  const addTask = useTaskStore((state) => state.addTask);

  const handleAddTask = () => {
    addTask({
      id: Date.now(),
      title: "New Task",
      priority: "medium",
      completed: false,
      createdAt: new Date().toISOString(),
    });
  };

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Task Manager</h1>
        <button
          onClick={handleAddTask}
          className="px-4 py-2 bg-white text-blue-600 rounded shadow hover:bg-gray-100"
        >
          Add Task
        </button>
      </div>
    </header>
  );
};
