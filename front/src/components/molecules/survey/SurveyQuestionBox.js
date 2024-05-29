import { Box } from '@mui/material';
import React from 'react';

import SurveyRadioButton from '@/components/atoms/SurveyRadioButton';

const SurveyQuestionBox = ({ questionNumber, question, handleChange }) => {
  return (
    <>
      <Box>
        Q{questionNumber}: {question}
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: '80px',
            '@media screen and (max-width:600px)': {
              fontSize: '10px',
              width: '50px',
            },
          }}
        >
          そう思わない
        </Box>
        <SurveyRadioButton handleChange={handleChange} />
        <Box
          sx={{
            width: '80px',
            '@media screen and (max-width:600px)': {
              fontSize: '10px',
              width: '50px',
            },
          }}
        >
          そう思う
        </Box>
      </Box>
    </>
  );
};

export default SurveyQuestionBox;
