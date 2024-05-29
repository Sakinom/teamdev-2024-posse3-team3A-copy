const Label = ({ className, children, ...props }) => (
  <label
    className={`${className} block text-lg font-bold text-teal-500`}
    {...props}
  >
    {children}
  </label>
);

export default Label;
