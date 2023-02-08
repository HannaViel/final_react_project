import React from "react";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      Weather App
      <footer>
        This project was coded by{" "}
        <a
          href="https://preeminent-cajeta-8bd6e7.netlify.app/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hanna Vielkova
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/HannaViel/final_react_project"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitGub
        </a>{" "}
        and{" "}
        <a
          href="https://visionary-gingersnap-cdd50a.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
