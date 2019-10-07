import React from "react";

export const Header: React.FC = () => {
  return (
    <div className="header" id="top">
      <nav className="stroke">
        <ul>
          <li>
            <a href="/">HOME PAGE</a>
          </li>
          <li>
            <a href="/planets">VISIT ALL PLANETS</a>
          </li>
          <li>
            <a href="/episodes">SEE ALL EPISODES</a>
          </li>
          <li>
            <a href="#">BACK TO TOP</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
