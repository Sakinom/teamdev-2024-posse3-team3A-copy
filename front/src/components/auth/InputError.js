const InputError = ({ messages = [], className = '' }) => (
  <>
    {messages.length > 0 && (
      <>
        {messages.map((message, index) => (
          <p className="text-sm font-normal text-red-500" key={index}>
            {message}
          </p>
        ))}
      </>
    )}
  </>
);

export default InputError;
