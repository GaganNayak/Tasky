import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import axios from "axios";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from the server when the component mounts
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5001");
        setTasks(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  //add task
  const addTask = async (task) => {
    try {
      const response = await axios.post("http://localhost:5001", task);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Delete task
  const delTask = async (_id) => {
    try {
      await axios.delete(`http://localhost:5001/${_id}`);
      setTasks(tasks.filter((task) => task._id !== _id));
      console.log("Deleted", _id);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  //Reminder
  const Reminder = async (_id) => {
    try {
      await axios.put(`http://localhost:5001/${_id}`);
      setTasks(
        tasks.map((task) =>
          task._id === _id ? { ...task, reminder: !task.reminder } : task
        )
      );
      console.log("Toggled reminder for task", _id);
    } catch (error) {
      console.error("Error toggling reminder:", error);
    }
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAddTask={showAddTask}
      />
      {showAddTask && <AddTasks onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={delTask} onToggle={Reminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
