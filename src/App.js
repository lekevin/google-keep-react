import "./styles/main.scss";
import React from "react";
import { MdRefresh } from 'react-icons/md';
import { BsViewStacked, BsGear } from 'react-icons/bs';


function App() {
  return (
    <body>
      <div className="header">
        <div className="nav1">
          <img src="icon.png" alt="logo" className="logo" />
          <span>Keep</span>
          <input className="search"></input>
        </div>
        <div className="button-wrapper">
          <MdRefresh className="refresh button" />
          <BsViewStacked className="view button" />
          <BsGear className="gear button" />
        </div>
      </div>
    </body>
  );
}

export default App;
