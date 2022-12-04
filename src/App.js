import { BrowserRouter as Router } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";

import { Routes } from "./routes";
import { Navigation } from "./widgets/navigation";

function App() {
  const navItems = [
    {
      id: "dashboard",
      to: "/",
      text: "Dashboard",
      icon: AiOutlineHome,
    },
    {
      id: "about",
      to: "/profile",
      text: "My Profile",
      icon: AiOutlineUser,
    },
  ];

  return (
    <Router>
      <Navigation items={navItems} />

      <Routes />
    </Router>
  );
}

export default App;
