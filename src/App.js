import { BrowserRouter as Router, Link, Switch } from "react-router-dom";

import { Routes } from "./routes";

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new-record">New Record</Link>
        </li>
      </ul>
      <Routes />
    </Router>
  );
}

export default App;
