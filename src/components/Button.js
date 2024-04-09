const Button = (props) => {
  return (
    <button className="border border-indigo-700 text-indigo-700 p-2 px-7 rounded relative hover:bg-indigo-700 hover:text-white">
      {props.name}
    </button>
  );
};

export default Button;
