const Button = ({ type = 'submit', className, ...props }) => (
  <button
    type={type}
    className={`${className} text-baseline inline-flex items-center rounded-full border border-transparent bg-teal-500 px-16 py-2 font-bold uppercase tracking-widest text-white ring-gray-300 transition duration-150 ease-in-out hover:bg-teal-500 hover:bg-opacity-70 focus:border-gray-900 focus:outline-none focus:ring active:bg-gray-900 disabled:opacity-25`}
    {...props}
  />
);

export default Button;
