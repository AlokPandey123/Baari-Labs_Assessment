import React from 'react';
import { AttendanceProvider } from './context/AttendanceContext';
import { TimesheetProvider } from './context/TimesheetContext';
import { DailyUpdateProvider } from './context/DailyUpdateContext'; // Import DailyUpdateProvider

import { Container } from '@mui/material';
import Dashboard from './dashboard';
import DailyUpdate from './DailyUpdate';
import Timesheet from './Timesheet';

const App = () => {
  return (
    <AttendanceProvider>
      <TimesheetProvider>
        <DailyUpdateProvider> {/* Wrap with DailyUpdateProvider */}
          <Container className="mt-16">
            <Dashboard />
            <div className='flex gap-4'>
              <DailyUpdate />
              <Timesheet />
            </div>
          </Container>
        </DailyUpdateProvider>
      </TimesheetProvider>
    </AttendanceProvider>
  );
};

export default App;
