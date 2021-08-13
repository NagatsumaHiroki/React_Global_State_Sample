import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../component/page/Top";
import { Users } from "../component/page/Users";
import { DeafaltLaout } from "../component/templates/DefaltLaout";
import { HeaderOnly } from "../component/templates/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DeafaltLaout>
            <Top />
          </DeafaltLaout>
        </Route>
        <Route path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
