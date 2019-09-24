import React from "react";

export const Header: React.FC = () => {
  return (
    <div className="header" id="top">
      <nav className="stroke">
        <ul>
          <li>
            <a href="/">Home Page</a>
          </li>
          <li>
            <a href="/planets">Visit All Planets</a>
          </li>
          <li>
            <a href="/episodes">See All Episodes</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
