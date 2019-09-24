import React from "react";

window.scroll({
  top: 0,
  left: 0,
  behavior: "smooth"
});
export const Footer: React.FC = () => {
  return (
    <div className="FooterLinks">
      <a data-label="top" href="#" className="FooterLink u-Route">
        TO THE TOP
      </a>
      <a data-label="home" href="/" className="FooterLink u-Route">
        HOME
      </a>
      <a data-label="planets" href="/planets" className="FooterLink u-Route">
        PLANETS
      </a>
      <a data-label="episodes" href="/episodes" className="FooterLink u-Route">
        EPISODES
      </a>
      <br />
      <span className="FooterLinksBlock FooterLinksBlock--disclamer">
        <span>
          <a
            href="https://andrejslavrinovics.netlify.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            © Andrejs Lavrinovičs
          </a>
        </span>
      </span>
    </div>
  );
};
