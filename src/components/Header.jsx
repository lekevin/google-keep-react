import React from "react";
import { MdRefresh } from "react-icons/md";
import { BsViewStacked, BsGear, BsGrid } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";


function Header({onSearch}) {

  function onChange(e) {
    return onSearch(e.target.value);
  }

  const changeView = () => {
    var el = document.querySelectorAll(".notes-wrapper");
    for (let i in el) { 
      if ( el[i].classList.includes("list") ) {
        el[i].classList.remove("list");
      } else {
        el[i].classList.add("list");
      }
     }
  }

  const searchExit = () => {
    document.getElementById('searchbar').value = '';
  }

  const refresh = () => {
    window.location.reload();
  }
  return (
    <body>
      <div className="header">
        <div className="nav1">
          <img onClick={refresh} src="icon.png" alt="logo" className="logo" />
          <span className="keep" onClick={refresh}>Keep</span>
          <div className="search-wrapper" id="search-wrapper">
            <div className="search">
              <BiSearch size={22} />
            </div>
            <div className="searchbar">
              <input className="searchbar" id="searchbar" placeholder="Search" onChange={onChange} ></input>
            </div>
            <div className="search-exit">
              <AiOutlineClose size={24} onClick={searchExit}/>
            </div>
          </div>
        </div>
        <div className="button-wrapper">
          <BiSearch className="search-a button" />
          <MdRefresh className="refresh button" onClick={refresh} />
          <BsViewStacked className="view button listview" onClick={changeView} />
          <BsGrid className="view button gridview" onClick={changeView} />
          <BsGear className="gear button" />
        </div>
      </div>
    </body>
  );
}

export default Header;
