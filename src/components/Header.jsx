import React from "react";
import { MdRefresh } from "react-icons/md";
import { BsViewStacked, BsGear } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  return (
    <body>
      <div className="header">
        <div className="nav1">
          <img src="icon.png" alt="logo" className="logo" />
          <span>Keep</span>
          <div className="search-wrapper" id="search-wrapper">
            <div className="search">
              <BiSearch size={22} />
            </div>
            <div className="searchbar">
              <input className="searchbar" placeholder="Search"></input>
            </div>
            <div className="search-exit">
              <AiOutlineClose size={24} />
            </div>
          </div>
        </div>
        <div className="button-wrapper">
          <BiSearch className="search-a button size=" />
          <MdRefresh className="refresh button" />
          <BsViewStacked className="view button" />
          <BsGear className="gear button" />
        </div>
      </div>
    </body>
  );
}

export default Header;
