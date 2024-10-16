import React, { createContext, useContext, useEffect, useState } from 'react';

const AttendanceContext = createContext();

export const AttendanceProvider = ({ children }) => {
  const [attendance, setAttendance] = useState({
    status: 'out',
    clockInTime: null,
    clockOutTime: null,
    totalHours: 0,
  });

  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    const response = await fetch('http://localhost:3001/attendance');
    const data = await response.json();
    setAttendance(data);
  };

  const updateAttendance = async (status) => {
    const currentTime = new Date();
    if (status === 'in') {
      setAttendance({
        ...attendance,
        status: 'in',
        clockInTime: currentTime.toISOString(),
      });
    } else if (status === 'out') {
      const clockOutTime = currentTime.toISOString();
      const clockInTime = new Date(attendance.clockInTime);
      const hoursWorked = Math.round((currentTime - clockInTime) / (1000 * 60 * 60)); // Calculate hours worked
      const updatedAttendance = {
        status: 'out',
        clockInTime: attendance.clockInTime,
        clockOutTime: clockOutTime,
        totalHours: hoursWorked,
      };

      setAttendance(updatedAttendance);
      await submitAttendance(updatedAttendance); // Update the mock API
    }
  };

  const submitAttendance = async (attendanceData) => {
    await fetch('http://localhost:3001/attendance', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(attendanceData),
    });
  };

  return (
    <AttendanceContext.Provider value={{ attendance, updateAttendance }}>
      {children}
    </AttendanceContext.Provider>
  );
};

export const useAttendance = () => useContext(AttendanceContext);
