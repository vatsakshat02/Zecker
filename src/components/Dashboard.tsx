import Header from "./Header";
import { useEffect, useState } from "react";
import { CalendarBasic } from "@/components/CalendarWithPresets";
import type { Task } from "./TaskTracker";

const Dashboard = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formattedSelectedDate = selectedDate.toDateString();

  const filteredTask = tasks.filter((t) => t.date === formattedSelectedDate);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedDate", selectedDate.toDateString());
  }, [selectedDate]);
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen">
      <Header />
      <div className="flex  justify-center gap-19 items-center pt-32  text-white ">
        <div className="border  border-white/20 bg-white/10 rounded-lg p-3">
          <h1 className="font-bold text-2xl  p-2">
            Tasks for {formattedSelectedDate}
          </h1>
          {filteredTask.length == 0 ? (
            <p className="border w-[480px] border-white/20 bg-white/10 rounded-lg p-3 mt-3">
              No tasks for Today
            </p>
          ) : (
            filteredTask.map((t, index) => (
              <div
                key={index}
                className="border w-[480px] border-white/20 bg-white/10 rounded-lg p-3 mt-3"
              >
                {t.text}
              </div>
            ))
          )}
        </div>
        <div>
          <CalendarBasic date={selectedDate} setDate={setSelectedDate} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
