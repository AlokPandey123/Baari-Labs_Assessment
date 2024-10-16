import React from 'react';
import { Button, Typography } from '@mui/material';
import { useAttendance } from './context/AttendanceContext';

const Dashboard = () => {
  const { attendance, updateAttendance } = useAttendance();

  const handleClockIn = () => updateAttendance('in');
  const handleClockOut = () => updateAttendance('out');

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <Typography variant="h4" className="text-center mb-4">Welcome, John Doe</Typography>
      <Typography variant="body1" className="text-center mb-2">Email: john.doe@example.com</Typography>
      <Typography variant="h6" className="text-center mb-4">Current Status: {attendance.status}</Typography>
      <div className="flex justify-center space-x-4 mb-4">
        <Button variant="contained" className="bg-blue-500 text-white" onClick={handleClockIn} disabled={attendance.status === 'in'}>Clock In</Button>
        <Button variant="contained" className="bg-red-500 text-white" onClick={handleClockOut} disabled={attendance.status === 'out'}>Clock Out</Button>
      </div>
      <Typography variant="body1" className="text-center">Total Hours Today: {attendance.totalHours}</Typography>
    </div>
  );
};

export default Dashboard;
