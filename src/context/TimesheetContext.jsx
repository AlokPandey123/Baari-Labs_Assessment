import React, { createContext, useContext, useEffect, useState } from 'react';

const TimesheetContext = createContext();

export const TimesheetProvider = ({ children }) => {
  const [timesheetEntries, setTimesheetEntries] = useState([]);

  useEffect(() => {
    fetchTimesheetEntries();
  }, []);

  const fetchTimesheetEntries = async () => {
    const response = await fetch('http://localhost:3001/timesheet');
    const data = await response.json();
    setTimesheetEntries(data);
  };

  const submitTimesheetEntry = async (entry) => {
    const response = await fetch('http://localhost:3001/timesheet', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entry),
    });
    await fetchTimesheetEntries(); // Refresh timesheet entries after submission
  };

  return (
    <TimesheetContext.Provider value={{ timesheetEntries, submitTimesheetEntry }}>
      {children}
    </TimesheetContext.Provider>
  );
};

export const useTimesheet = () => useContext(TimesheetContext);
