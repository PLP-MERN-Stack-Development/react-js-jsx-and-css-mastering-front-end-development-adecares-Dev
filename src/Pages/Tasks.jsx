import { useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";
import Button from "../components/Button";

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const filtered = tasks.filter((task) =>
    filter === "active" ? !task.completed :
    filter === "completed" ? task.completed : true
  );

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <div className="flex gap-2 mb-4">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 border p-2 rounded"
          placeholder="Add new task..."
        />
        <Button label="Add" onClick={addTask} />
      </div>

      <div className="flex gap-2 mb-4">
        {["all", "active", "completed"].map((f) => (
          <Button
            key={f}
            label={f}
            variant={filter === f ? "primary" : "secondary"}
            onClick={() => setFilter(f)}
          />
        ))}
      </div>

      <ul>
        {filtered.map((task) => (
          <li key={task.id} className="flex justify-between items-center mb-2">
            <span
              onClick={() => toggleTask(task.id)}
              className={`cursor-pointer ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {task.text}
            </span>
            <Button
              label="Delete"
              variant="danger"
              onClick={() => deleteTask(task.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
