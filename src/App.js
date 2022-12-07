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
          <Link to="/new-record">
            New <br /> record
          </Link>
        </li>
        <li>
          <Link to="/records">Records</Link>
        </li>
      </ul>

      <Routes />
    </Router>
  );
}

export default App;
