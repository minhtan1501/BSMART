
import { Link } from "react-router-dom";

export default function BtnLink({ path = "/", children, className = "" }) {
  return (
    <Link to={path} className={"btn-link" + className}>
      {children}
    </Link>
  );
}
