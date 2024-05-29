import React from 'react';

const RecordButton = ({ surveyTermId, yearMonth }) => {
  return (
    <a
      href={`/admin/record?survey_term_id=${surveyTermId}`}
      className={`mt-4 flex min-h-12 min-w-max items-center justify-center rounded-lg bg-green-main px-4 text-xl font-bold text-white`}
    >
      {yearMonth}
    </a>
  );
};

export default RecordButton;
