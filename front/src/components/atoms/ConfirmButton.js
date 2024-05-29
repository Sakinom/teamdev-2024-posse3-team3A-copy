import React from 'react';

const ConfirmButton = ({ text, bgColor }) => {
  return (
    <button
      type="submit"
      className={`h-7.75 w-51 rounded-lg text-white ${bgColor} mt-4 text-base`}
    >
      {text}
    </button>
  );
};

export default ConfirmButton;
