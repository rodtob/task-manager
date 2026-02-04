import { useTaskStore } from "../store/useTaskStore";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks);

  if (tasks.length === 0) {
    return <p className="text-gray-500">No tasks yet</p>;
  }

  return (
    <div className="flex flex-wrap gap-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
