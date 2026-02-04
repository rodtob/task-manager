import TaskCounter from "./components/Counter";
import { Header } from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <TaskCounter />
      <div className="flex flex-col items-center justify-center ml-10 mr-10 min-h-screen">
        <TaskList />
      </div>
    </div>
  );
}

export default App;
