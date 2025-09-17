import React, { useContext } from 'react';
import { WaterContext } from '../Context/WaterContext';
import './Home.css';

const Home = () => {
  const { intake, setIntake, goal, setGoal } = useContext(WaterContext);
  const progress = Math.min((intake / goal) * 100, 100).toFixed(0);

  return (
    <div className="app">
      <h1>Hydro Daily</h1>
      <p>Track your daily hydration</p>

      <div className="box">
        <div className="row">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="bar">
          <div className="fill" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="row">
          <span>0 ml</span>
          <span>{goal} ml</span>
        </div>
      </div>
      <div className="drop">💧</div>
      <h2>{intake} ml</h2>
      <p>of {goal} ml</p>

      <div className="btns">
        <button onClick={() => setIntake(Math.max(intake - 250, 0))}>-</button>
        <button onClick={() => setIntake(Math.min(intake + 250, goal))}>+</button>
      </div>

      <div className="goal">
        <p>Daily Goal</p>
        <p>{goal} ml</p>
        <button onClick={() => setGoal(goal > 100 ? goal - 100 : 100)}>-</button>
        <button onClick={() => setGoal(goal + 100)}>+</button>
      </div>
    </div>
  );
};

export default Home;

