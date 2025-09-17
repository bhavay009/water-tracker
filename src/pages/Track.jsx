import React, { useContext } from "react";
import { WaterContext } from "../Context/WaterContext";
import "./Track.css";

function Track() {
  const { intake, setIntake, goal, list, setList } = useContext(WaterContext);

  const add = (ml) => {
    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const newEntry = { id: Date.now(), ml, time };
    setList([newEntry, ...list]);

    setIntake((prev) => Math.min(prev + ml, goal));
  };

  return (
    <div>
      <h1>Track Intake</h1>
      <p>Log your water</p>
      <div className="buttons">
        <button className="change"onClick={() => add(150)}>
          Small Glass
          <br />
          <span>150 ml</span>
        </button>
        <button  className="change" onClick={() => add(250)}>
          Regular Glass
          <br />
          <span>250 ml</span>
        </button>
        <button className="change" onClick={() => add(350)}>
          Large Glass
          <br />
          <span>350 ml</span>
        </button>
        <button className="change" onClick={() => add(500)}>
          Bottle
          <br />
          <span>500 ml</span>
        </button>
        <button  className="change" onClick={() => add(750)}>
          Big Bottle
          <br />
          <span>750 ml</span>
        </button>

        <button
          className=" change full"
          onClick={() => {
            const custom = prompt("Enter custom amount in ml:");
            const ml = parseInt(custom);
            if (!isNaN(ml) && ml > 0) {
              add(ml);
            } else {
              alert("Please enter a valid number greater than 0.");
            }
          }}
        >
          Custom Amount
        </button>
      </div>

      <h2>Entries</h2>
      {list.length === 0 ? (
        <p>No entries yet</p>
      ) : (
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              {item.ml} ml at {item.time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Track;
