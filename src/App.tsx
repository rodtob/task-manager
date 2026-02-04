import { Header } from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex items-center justify-center min-h-screen">
        <TaskList />
      </div>
    </div>
  );
}

export default App;
