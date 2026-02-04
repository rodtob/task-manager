import { useTaskStore } from "../store/useTaskStore";
import { useFilterStore } from "../store/useFilterStore";
import { useSearchStore } from "../store/useSearchStore";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const tasks = useTaskStore((state) => state.tasks);
  const filter = useFilterStore((state) => state.filter);
  const searchTerm = useSearchStore((state) => state.searchTerm.toLowerCase());

  const filteredTasks = tasks.filter((task) => {
    const matchesStatus =
      filter === "completed"
        ? task.completed
        : filter === "incomplete"
        ? !task.completed
        : true;

    const matchesTitle = task.title.toLowerCase().includes(searchTerm);

    return matchesStatus && matchesTitle;
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
