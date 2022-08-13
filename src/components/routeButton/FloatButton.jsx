import { Link } from "react-router-dom";

function FloatButton({ float, Route }) {
  return (
    <Link to={"/" + Route}>
      <button style={{ float: float }}>{Route}</button>
    </Link>
  );
}

export default FloatButton