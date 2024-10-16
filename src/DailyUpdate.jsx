import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useDailyUpdate } from './context/DailyUpdateContext';

const DailyUpdate = () => {
  const [update, setUpdate] = useState('');
  const { dailyUpdates, submitDailyUpdate } = useDailyUpdate();

  const handleSubmit = () => {
    const newUpdate = {
      date: new Date().toISOString().split('T')[0], // Current date
      update,
    };
    submitDailyUpdate(newUpdate);
    setUpdate('');
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg mt-6" style={{width:'50%'}}>
      <Typography variant="h6" className="mb-4">Daily Update</Typography>
      <TextField
        label="What's your update?"
        variant="outlined"
        fullWidth
        value={update}
        onChange={(e) => setUpdate(e.target.value)}
        className="mb-4"
      />
      <Button variant="contained" className="bg-blue-500 text-white" style={{marginTop:'8px'}} onClick={handleSubmit}>Submit Update</Button>

      <Typography variant="h6" className="mt-4">Previous Updates:</Typography>
      <div className="mt-2">
        {(dailyUpdates && dailyUpdates.slice(0, 5))?.map((entry) => (
          <div key={entry.id} className="mb-2">
            <Typography className="font-bold">{entry.date}</Typography>
            <Typography>{entry.update}</Typography>
          </div>
        )) || <Typography>No previous updates available.</Typography>} {/* Fallback message */}
      </div>
    </div>
  );
};

export default DailyUpdate;
