import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useTimesheet } from './context/TimesheetContext';
import { useAttendance } from './context/AttendanceContext';

const Timesheet = () => {
  const [date, setDate] = useState('');
  const [projectName, setProjectName] = useState('');
  const [hours, setHours] = useState('');
  const { timesheetEntries, submitTimesheetEntry } = useTimesheet();
  const { attendance } = useAttendance();

  const handleSubmit = () => {
    const entry = {
      date: date || new Date().toISOString().split('T')[0], // Default to today if no date provided
      projects: [{ name: projectName, hours: parseInt(hours, 10) || attendance.totalHours }],
    };
    submitTimesheetEntry(entry);
    setDate('');
    setProjectName('');
    setHours('');
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg mt-6">
      <Typography variant="h6" className="mb-4">Submit Timesheet Entry</Typography>
      <TextField
        type="date"
        variant="outlined"
        fullWidth
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="mb-4"
      />
      <TextField
        label="Project Name"
        variant="outlined"
        fullWidth
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        className="mb-4"
        style={{marginTop:'8px'}}
      />
      <TextField
        label="Hours Worked"
        type="number"
        variant="outlined"
        fullWidth
        value={hours}
        onChange={(e) => setHours(e.target.value)}
        className="mb-4"
        style={{marginTop:'8px'}}
        placeholder={`Default: ${attendance.totalHours}`} // Show default hours worked
      />
      <Button variant="contained" className="bg-green-500 text-white" style={{marginTop:'8px'}} onClick={handleSubmit}>Submit Timesheet</Button>

      <Typography variant="h6" className="mt-4">Weekly Timesheet Entries:</Typography>
      <div className="mt-2">
        {timesheetEntries.map((entry) => (
          <div key={entry.id} className="mb-2">
            <Typography className="font-bold">{entry.date}</Typography>
            {entry.projects.map((project) => (
              <Typography key={project.name}>{project.name}: {project.hours} hours</Typography>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timesheet;
