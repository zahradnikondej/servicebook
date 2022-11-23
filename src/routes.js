import { Routes as Switch, Route } from "react-router-dom";

import { Home } from "./views/home";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact element={<Home />} />
      <Route path="/new-record" element={<h1>New Record</h1>} />
    </Switch>
  );
}
export { Routes };
