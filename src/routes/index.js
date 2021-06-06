import { Route, Switch } from "react-router-dom";
import Casamento from "../pages/Casamento";
import Confraternizacao from "../pages/Confraternizacao";
import Formatura from "../pages/Formatura";
import Home from "../pages/Home";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/formatura">
        <Formatura />
      </Route>
      <Route path="/confraternizacao">
        <Confraternizacao />
      </Route>
      <Route path="/casamento">
        <Casamento />
      </Route>
    </Switch>
  );
}
