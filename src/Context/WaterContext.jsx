import React, { createContext, useState } from 'react';

export const WaterContext = createContext();

export const WaterProvider = ({ children }) => {
  const [intake, setIntake] = useState(0);
  const [goal, setGoal] = useState(2000);
  const [list, setList] = useState([]);

  return (
    <WaterContext.Provider value={{ intake, setIntake, goal, setGoal, list, setList }}>
      {children}
    </WaterContext.Provider>
  );
};
