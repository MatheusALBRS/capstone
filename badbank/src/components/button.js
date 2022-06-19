import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <div>
      <Link to={props.to}>
        <button className="btn btn-primary btn-lg button" type="button" onClick={props.onClick}>
          {props.text}
        </button>
      </Link>
    </div>
  );
}
