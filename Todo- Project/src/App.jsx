import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (!task.trim()) return;

    setTasks([...tasks, task]);
    setTask("");
  }

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[420px]">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Todo List
        </h1>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full">
              Add New Task
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Task</DialogTitle>
            </DialogHeader>

            <Input
              placeholder="Task name..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />

            <Button
              className="w-full mt-4"
              onClick={addTask}
            >
              Save Task
            </Button>
          </DialogContent>
        </Dialog>

        <ul className="mt-6 space-y-2">
          {tasks.map((item, index) => (
            <li
              key={index}
              className="bg-slate-100 rounded-lg p-3"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;