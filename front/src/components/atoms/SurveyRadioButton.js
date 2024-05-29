import { Radio } from '@mui/material';
import React, { useState } from 'react';

const SurveyRadioButton = ({ handleChange }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleLocalChange = (event) => {
    setSelectedValue(event.target.value);
    handleChange(event.target.value);
  };

  return (
    <div>
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
      <Radio
        required
        checked={selectedValue === '2'}
        onChange={handleLocalChange}
        value="2"
        name="main_survey_radio_button"
        inputProps={{ 'aria-label': '2' }}
        sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 23,
          },
        }}
      />
      <Radio
        required
        checked={selectedValue === '3'}
        onChange={handleLocalChange}
        value="3"
        name="main_survey_radio_button"
        inputProps={{ 'aria-label': '3' }}
        sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 16,
            color: 'gray',
          },
        }}
      />
      <Radio
        required
        checked={selectedValue === '4'}
        onChange={handleLocalChange}
        value="4"
        name="main_survey_radio_button"
        inputProps={{ 'aria-label': '4' }}
        sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 23,
          },
        }}
      />
      <Radio
        required
        checked={selectedValue === '5'}
        onChange={handleLocalChange}
        value="5"
        name="main_survey_radio_button"
        inputProps={{ 'aria-label': '5' }}
        sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 30,
          },
        }}
      />
    </div>
  );
};

export default SurveyRadioButton;
