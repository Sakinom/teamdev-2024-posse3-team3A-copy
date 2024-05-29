import { Radio } from '@mui/material';
import React, { useState } from 'react';

const AdditionalSurveyRadioButton = ({ handleChange }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleLocalChange = (event) => {
    setSelectedValue(event.target.value);
    handleChange(event.target.value);
  };

  return (
    <div>
      <Radio
        required
        checked={selectedValue === '0'}
        onChange={handleLocalChange}
        value="0"
        name="main_survey_radio_button"
        inputProps={{ 'aria-label': '0' }}
        sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 30,
          },
        }}
      />
      <Radio
        required
        checked={selectedValue === '1'}
        onChange={handleLocalChange}
        value="1"
        name="main_survey_radio_button"
        inputProps={{ 'aria-label': '1' }}
        sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 30,
          },
        }}
      />
    </div>
  );
};

export default AdditionalSurveyRadioButton;
