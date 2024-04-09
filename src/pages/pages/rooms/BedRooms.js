import Button from "../../../components/Button";

const BedRooms = (props) => {
  return (
    <div>
      <img src={props.image}></img>
      <h1 className="my-4 text-2xl">{props.name}</h1>
      <p className="my-5 opacity-70">{props.description}</p>
      <ul className="opacity-70 grid gap-2">
        <li className="flex items-center gap-3">
          {props.icon1}
          {props.bedType}
        </li>
        <li className="flex items-center gap-3">
          {props.icon2}
          {props.wifi}
        </li>
        <li className="flex items-center gap-3">
          {props.icon3}
          {props.tv}
        </li>
        <li className="flex items-center gap-3">
          {props.icon4}
          {props.smoke}
        </li>
        <li className="flex items-center gap-3">
          {props.icon5}
          {props.newspaper}
        </li>
        <li className="flex items-center gap-3">
          {props.icon6}
          {props.corridor}
        </li>
      </ul>
      <div className="my-4">
        <Button name="Reserve Now"></Button>
      </div>
    </div>
  );
};

export default BedRooms;
