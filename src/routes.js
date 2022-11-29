import { Routes as Switch, Route } from "react-router-dom";

import { Home } from "./views/home";
import { NewRecord } from "./views/new-record";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact element={<Home />} />
      <Route path="/new-record" element={<NewRecord />} />
      <Route path="/about" element={<h1>About</h1>} />
    </Switch>
  );
}
export { Routes };
