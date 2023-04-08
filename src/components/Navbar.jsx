import React from "react";
import { useState } from "react";
import "../styles/mobileNavbar.scss";
import Logotype from "../assets/Logotype.png";
import Path from "../assets/Path.png";
import Arrow from "../assets/Arrow.png";
import Menu from "../assets/Menu.png";

function Navbar() {
  const [visible, setVisible] = useState("flex")
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    if (scrolled > 200) {
      let element = document.getElementById("menu");
      element.style.transform = "translateY(-100%)";
    } else if (scrolled <= 200) {
      let element = document.getElementById("menu");
      element.style.transform = "translateY(0)";
    }
  });
  const showMenu = () => {
    visible === "flex" ? setVisible("none") : setVisible("flex")
    console.log(visible)
}
  return (
    <>
      <div>
        <nav id="menu">
          <span className="heading">
            <img src={Menu} className="menu" onClick={showMenu} />
            <img src={Logotype} className="logo" />
          </span>
          <ul className="container" style={{display: visible}}>
            <li>
              Demos
              <img src={Path} />
            </li>
            <li>
              Post
              <img src={Path} />
            </li>{" "}
            <li className="features">
              Features
              <img src={Path} />
              <ul className="submenu">
                <li>
                  <span className="grid-container">
                    <span>Post Header</span>
                    <img src={Arrow} />
                  </span>
                </li>
                <li className="layout">
                  <span className="grid-container">
                    <span>Post Layout</span>
                    <img src={Arrow} />
                  </span>
                  <div className="second-submenu">Share Buttons</div>
                </li>
                <li>
                  <span className="grid-container">
                    <span> Gallery Post</span>
                    <img src={Arrow} />
                  </span>
                </li>
                <li>
                  <span className="grid-container">
                    <span> Video Post</span>
                    <img src={Arrow} />
                  </span>
                </li>
              </ul>
            </li>{" "}
            <li>
              Categories
              <img src={Path} />
            </li>{" "}
            <li>
              Shop
              <img src={Path} />
            </li>{" "}
            <li>Demos</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
