import logo from "./assets/globe.svg";

export default function Navbar() {
  return (
    <nav>
      <div className="nav--container">
        <img className="nav--logo" src={logo} alt="globe" />
        <h1 className="nav--title">my travel journal.</h1>
      </div>
    </nav>
  );
}
