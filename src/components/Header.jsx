import React from "react";
import { MdRefresh } from "react-icons/md";
import { BsViewStacked, BsGear, BsGrid, BsWindowSidebar } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

function Header({ onSearch }) {
  function onChange(e) {
    return onSearch(e.target.value);
  }

  const changeView = () => {
    var el = document.querySelectorAll(".notes-wrapper");
    for (let i in el) {
      if (el[i].classList.contains("list")) {
        el[i].classList.remove("list");
      } else {
        el[i].classList.add("list");
      }
    }
  };

  const searchExit = () => {
    document.getElementById("searchbar").value = "";
  };

  const refresh = () => {
    window.location.reload();
  };

  function searchTapped() {
    document.getElementById("search-wrapper").classList.toggle("active");
    document.getElementById("logo").classList.toggle("active");
    document.getElementById("keep").classList.toggle("active");
  }

  const gearClicked = () => {
    window.alert("Hi there! I am a very basic version of Google Keep and I am still being worked on so please be patient with new features and updated UI!")
  }

  return (
    <body>
      <div className="header">
        <div className="nav1">
          <img onClick={refresh} src="icon.png" alt="logo" className="logo" id="logo" />
          <span className="keep" id="keep" onClick={refresh}>
            Keep
          </span>
          <div className="search-wrapper active" id="search-wrapper">
            <div className="search">
              <BiSearch size={22} />
            </div>
            <div className="searchbar">
              <input
                className="searchbar"
                id="searchbar"
                placeholder="Search"
                onChange={onChange}
              ></input>
            </div>
            <div className="search-exit">
              <AiOutlineClose size={24} onClick={searchExit} />
            </div>
          </div>
        </div>
        <div className="button-wrapper">
          <BiSearch
            className="search-a button"
            id="search-a"
            onClick={searchTapped}
          />
          <MdRefresh className="refresh button" onClick={refresh} />
          <BsViewStacked
            className="view button listview"
            onClick={changeView}
          />
          <BsGrid className="view button gridview" onClick={changeView} />
          <BsGear className="gear button" onClick={gearClicked} />
        </div>
      </div>
    </body>
  );
}

export default Header;
