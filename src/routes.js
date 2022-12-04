import { Routes as Switch, Route } from "react-router-dom";

import { Home } from "./views/home";
import { Profile } from "./views/profile";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact element={<Home />} />
      <Route path="/profile" exact element={<Profile />} />
    </Switch>
  );
}
export { Routes };
