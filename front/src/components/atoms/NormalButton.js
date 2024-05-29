import React from 'react';

const NormalButton = ({ text, ClickUpdate }) => {
  const handleClick = () => {
    ClickUpdate();
  };
  return (
    <>
      <button
        type="submit"
        className="h-12 w-2/5 rounded-full bg-gray-500 text-2xl font-black text-white shadow-xl shadow-gray-400"
        onClick={handleClick}
      >
        {text}
      </button>
    </>
  );
};

export default NormalButton;
