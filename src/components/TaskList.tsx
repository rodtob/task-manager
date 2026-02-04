import { useTaskStore } from "../store/useTaskStore";
import { useFilterStore } from "../store/useFilterStore";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const filter = useFilterStore((state) => state.filter);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  return (
    <div className="flex flex-wrap gap-4">
      {filteredTasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
