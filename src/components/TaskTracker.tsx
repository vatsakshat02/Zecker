import Header from "./Header";
import { useState, useEffect } from "react";

export type Task = {
  id: string;
  text: string;
  date: string;
  completed: boolean;
};

const TaskTracker = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loaded, setLoaded] = useState(false);

  const selectedDate =
    localStorage.getItem("selectedDate") || new Date().toDateString();

  const handleTask = () => {
    if (!task.trim()) return;

    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        text: task,
        date: selectedDate,
        completed: false,
      },
    ]);
    setTask("");
  };

  const toggleComplete = (index: number) => {
    const updated = [...tasks];

    const actualIndex = tasks.findIndex(
      (task) => task.id === todaysTasks[index].id
    );
    updated[actualIndex].completed = !updated[actualIndex].completed;
    setTasks(updated);
  };

  const deleteTasks = (index: number) => {
    const actualIndex = tasks.findIndex(
      (task) => task.id === todaysTasks[index].id
    );

    const updated = tasks.filter((_, i) => i !== actualIndex);
    setTasks(updated);
  };

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const todaysTasks = tasks.filter((t) => t.date === selectedDate);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen">
      <Header />
      <div className="flex justify-center items-center h-[80vh]">
        <div className="border border-white/30 shadow-[] bg-white/10 p-4 m-4 rounded-lg text-white opacity-0 animate-[fadeIn_1.6s_ease-out_forwards]">
          <h1 className="font-bold text-2xl m-2">TaskTracker</h1>
          <input
            type="text"
            className="w-[480px] border border-white/20 bg-white/10 focus:outline-none py-3 px-5 rounded-lg transition m-3"
            placeholder="Write your tasks for the day"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            className="border border-white/20 bg-white/10 focus:outline-none focus:ring-2 hover:focus:ring-blue-500 px-5 py-3 rounded-lg transition"
            onClick={handleTask}
          >
            Add
          </button>
          <div className="">
            {todaysTasks.map((t, index) => (
              <div
                className="flex justify-between animate-[fadeIn_1.6s_ease-out_forwards]"
                key={index}
              >
                <div className="border border-white/20 bg-white/10 mt-2 rounded-lg p-3 w-[480px] ml-3 ">
                  {t.text}
                </div>
                <div className="flex gap-2  ">
                  <span
                    className="border border-white/20 bg-white/10 mt-2 rounded-lg p-3 ml-2"
                    onClick={() => deleteTasks(index)}
                  >
                    Delete
                  </span>
                  <span
                    className="border border-white/20 bg-white/10 mt-2 rounded-lg p-3 "
                    onClick={() => toggleComplete(index)}
                  >
                    {t.completed ? "Undo" : "Completed"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskTracker;
