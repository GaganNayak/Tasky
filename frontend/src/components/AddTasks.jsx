import { useState } from "react";

const AddTasks = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDate] = useState("");
  const [times, setTime] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("please add a text!!!");
      return;
    }

    onAdd({ text, day, times, reminder });
    setText("");
    setDate("");
    setTime("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label htmlFor="">Date & Time</label>
        <input
          type="date"
          placeholder="Add Date & Time"
          value={day}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="time"
          placeholder="Add Date & Time"
          value={times}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      <div className="form-control form-control-check">
        <label htmlFor="">Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTasks;
