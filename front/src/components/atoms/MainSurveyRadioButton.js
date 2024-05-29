import Radio from '@mui/material/Radio';
import * as React from 'react';

export default function SizeRadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('c');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'main_survey_radio_button',
    inputProps: { 'aria-label': item },
  });

  return (
    <div>
      <Radio
        {...controlProps('a')}
        sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 30,
          },
        }}
      />
      <Radio
        {...controlProps('b')}
        sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 23,
          },
        }}
      />
      <Radio
        {...controlProps('c')}
        sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 16,
            color: 'gray',
          },
        }}
      />
      <Radio
        {...controlProps('d')}
        sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 23,
          },
        }}
      />
      <Radio
        {...controlProps('e')}
        sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 30,
          },
        }}
      />
    </div>
  );
}
