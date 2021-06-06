import "./styles.css";

export default function Nav() {
  return (
    <nav>
      <ul style={{ display: "flex", justifyContent: "space-around" }}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/casamento">Casamento</a>
        </li>
        <li>
          <a href="/confraternizacao">Confraternização</a>
        </li>
        <li>
          <a href="/formatura">Formatura</a>
        </li>
      </ul>
    </nav>
  );
}
