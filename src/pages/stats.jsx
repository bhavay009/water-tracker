import React, { useContext } from 'react';
import { WaterContext } from '../Context/WaterContext';
import './stats.css';

function Stats() {
  const { intake, goal } = useContext(WaterContext);

  const percentage = Math.round((intake / goal) * 100);
  const remaining = goal - intake;
  const status = intake >= goal ? " Goal Reached!" : "Keep Drinking!";

  return (
    <div className="stats">
      <h1>📊 Your Stats</h1>
      <p><span className="label">Total Intake:</span> {intake} ml</p>
      <p><span className="label">Goal:</span> {goal} ml</p>
      <p><span className="label">Progress:</span> {percentage}%</p>
      <p><span className="label">Remaining:</span> {remaining > 0 ? remaining : 0} ml</p>
      <p><span className="label">Status:</span> {status}</p>
    </div>
  );
}

export default Stats;


