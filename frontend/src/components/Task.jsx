import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : " "}`}
      onDoubleClick={() => onToggle(task._id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "#00308F", cursor: "pointer" }}
          onClick={() => onDelete(task._id)}
        />
      </h3>
      <p>
        {task.day} {task.times}
      </p>
    </div>
  );
};

export default Task;
