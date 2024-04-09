const Customers = (props) => {
  return (
    <div className="border-2 rounded-md my-8 p-4 md:my-0">
      <div className="text-indigo-700 mb-4">{props.stars}</div>
      <div>
        <p>{props.comments}</p>
      </div>
      <div className="flex gap-3 my-4">
        <img className="w-10 h-10 rounded-full" src={props.image}></img>
        <h1 className="uppercase mt-2">{props.name}</h1>
      </div>
    </div>
  );
};

export default Customers;
