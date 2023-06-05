import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import NavBAr from "./components/NavBar/NavBar";
import { Detail, Forms, Home, Inicio, Landing } from "./views/index";
import { Route } from "react-router-dom";

function App() {
  const location = useLocation(); /*elimine la NavBar de las demsa
  vistas usando este HOOK*/
  console.log(location);
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBAr />}
      <Route exact path="/home" render={() => <Home />} />
      <Route exact path="/detail" render={() => <Detail />} />
      <Route exact path="/" render={() => <Landing />} />
      <Route exact path="/create" render={() => <Forms />} />
    </div>
  );
}

export default App;
