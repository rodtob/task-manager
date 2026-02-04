import { useTaskStore } from "../store/useTaskStore";

const TaskCounter = () => {
  const tasks = useTaskStore((state) => state.tasks);

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;

  return (
    <div className="flex gap-4 p-2">
      <span className="text-gray-700 font-medium">
        Total tasks: {total}
      </span>
      <span className="text-gray-700 font-medium">
        Completed: {completed}
      </span>
    </div>
  );
};

export default TaskCounter;
