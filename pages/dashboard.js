import React, { useState } from "react";
import Home from "./components/Home";
import Identities from "./components/Identities";
import EarnReputation from "./components/EarnReputation";
import Settings from "./components/Settings";
import Navbar from "./components/Navbar";

export default function Dashboard() {
  const [menu, setMenu] = useState(1);
  return (
    <div className="flex w-full h-screen">
      <div className="mt-5 h-screen ml-5 w-1/6">
        <li>
          <button onClick={() => setMenu(1)}>Home</button>
        </li>
        <li>
          <button onClick={() => setMenu(2)}>Your identities</button>
        </li>
        <li>
          <button onClick={() => setMenu(3)}>Earn reputation</button>
        </li>
        <li>
          <button onClick={() => setMenu(4)}>Settings</button>
        </li>
      </div>
      <div className="ml-5 mt-5 w-5/6">
        {menu == 1 && <Home />}
        {menu == 2 && <Identities />}
        {menu == 3 && <EarnReputation />}
        {menu == 4 && <Settings />}
      </div>
    </div>
  );
}
