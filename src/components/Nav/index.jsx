import "./styles.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul style={{ display: "flex", justifyContent: "space-around" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/casamento">Casamento</Link>
        </li>
        <li>
          <Link to="/confraternizacao">Confraternização</Link>
        </li>
        <li>
          <Link to="/formatura">Formatura</Link>
        </li>
      </ul>
    </nav>
  );
}
