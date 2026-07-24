import tasks from "./data";
import TaskCard from "./components/TaskCard";

function App() {
  return (
    <div className="container">
      <h1>My Todo List</h1>

      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
}

export default App;