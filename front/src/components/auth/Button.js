const Button = ({ type = 'submit', className = '', ...props }) => (
  <button
    type={type}
    className={`${className} bg-public-blue mt-8 w-64 items-center rounded-3xl border border-transparent px-8 py-2 text-2xl font-extrabold tracking-widest text-white shadow-lg ring-gray-300 transition duration-150 ease-in-out focus:border-gray-900 focus:outline-none focus:ring disabled:opacity-25`}
    {...props}
  />
);

export default Button;
