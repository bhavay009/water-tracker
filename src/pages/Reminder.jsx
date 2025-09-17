import React, { useState } from "react";
import "./Reminder.css";

function Reminder() {
  const [reminders, setReminders] = useState([
    { id: 1, time: "09:00 AM" },
    { id: 2, time: "12:00 PM" },
    { id: 3, time: "03:00 PM" },
  ]);
  const [newTime, setNewTime] = useState("");

  const addReminder = () => {
    if (newTime.trim() === "") return;

    const newId = reminders.length + 1;
    setReminders([...reminders, { id: newId, time: newTime }]);
    setNewTime("");
  };

  const deleteReminder = (id) => {
    setReminders(reminders.filter((r) => r.id !== id));
  };

  return (
    <div className="container">
      <h2>Reminders</h2>

      <div>
        {reminders.map((r) => (
          <div className="reminder-box" key={r.id}>
            <span>⏰ {r.time}</span>
            <button onClick={() => deleteReminder(r.id)}>Delete</button>
          </div>
        ))}
      </div>

      <div className="input-section">
        <input
          type="time"
          value={newTime}
          onChange={(e) => setNewTime(e.target.value)}
        />
        <button onClick={addReminder} className="add-button">
          Add Reminder
        </button>
      </div>
    </div>
  );
}

export default Reminder;
