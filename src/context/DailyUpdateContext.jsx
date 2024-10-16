import React, { createContext, useContext, useEffect, useState } from 'react';

const DailyUpdateContext = createContext();

export const DailyUpdateProvider = ({ children }) => {
  const [dailyUpdates, setDailyUpdates] = useState([]);

  useEffect(() => {
    fetchDailyUpdates();
  }, []);

  const fetchDailyUpdates = async () => {
    const response = await fetch('http://localhost:3001/dailyUpdates');
    const data = await response.json();
    setDailyUpdates(data);
  };

  const submitDailyUpdate = async (update) => {
    const response = await fetch('http://localhost:3001/dailyUpdates', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(update),
    });
    await fetchDailyUpdates(); // Refresh updates after submission
  };

  return (
    <DailyUpdateContext.Provider value={{ dailyUpdates, submitDailyUpdate }}>
      {children}
    </DailyUpdateContext.Provider>
  );
};

export const useDailyUpdate = () => useContext(DailyUpdateContext);
