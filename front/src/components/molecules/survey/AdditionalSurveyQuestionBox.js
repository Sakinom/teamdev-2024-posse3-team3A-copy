import { Box } from '@mui/material';
import React from 'react';

import AdditionalSurveyRadioButton from '@/components/atoms/AdditionalSurveyRadioButton';

const AdditionalSurveyQuestionBox = ({
  questionNumber,
  question,
  handleChange,
}) => {
  return (
    <>
      <Box>
        Q{questionNumber}: {question}
      </Box>
      {/* タッチ式ボタン */}
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
          同意しない
        </Box>
        <AdditionalSurveyRadioButton handleChange={handleChange} />
        <Box
          sx={{
            width: '80px',
            '@media screen and (max-width:600px)': {
              fontSize: '10px',
              width: '50px',
            },
          }}
        >
          同意する
        </Box>
      </Box>
    </>
  );
};

export default AdditionalSurveyQuestionBox;
