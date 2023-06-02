import logo from "./logo.svg";
import "./Inicio.css";

function Inicio() {
  return (
    <div className="Inicio">
      <header className="Inicio-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default Inicio;
