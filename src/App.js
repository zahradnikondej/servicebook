import { BrowserRouter as Router, Link, Switch } from "react-router-dom";

import { Routes } from "./routes";

function App() {
  return (
    <Router>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new-record">Record</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <Routes />
    </Router>
  );
}

export default App;
