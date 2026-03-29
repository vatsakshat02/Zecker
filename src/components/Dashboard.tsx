import Header from "./Header";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Dashboard = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen">
      <Header />
      <div className="flex  justify-center gap-20 items-center pt-32  text-white ">
        <div className="border  border-white/20 bg-white/10 rounded-lg p-3">
          <h1 className="font-bold text-2xl  p-2">Tasks for Today</h1>
          {tasks.map((t, index) => (
            <div
              key={index}
              className="border w-[480px] border-white/20 bg-white/10 rounded-lg p-3 mt-3"
            >
              {t}
            </div>
          ))}
        </div>
        <div>
          {" "}
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
