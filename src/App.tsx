import TaskCounter from "./components/Counter";
import FilterBar from "./components/FilterBar";
import { Header } from "./components/Header";
import SearchBar from "./components/SearchBar";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex justify-between m-2">
        <TaskCounter />
        <FilterBar />
        <SearchBar />
      </div>
      <div className="flex flex-col items-center justify-center ml-10 mr-10 min-h-screen">
        <TaskList />
      </div>
    </div>
  );
}

export default App;
