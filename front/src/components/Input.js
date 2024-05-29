const Input = ({ disabled = false, className, placeholder, ...props }) => (
  <input
    disabled={disabled}
    className={`${className} rounded-md border-2 border-gray-400 px-2 py-1`}
    {...props}
    placeholder={placeholder}
  />
);

export default Input;
