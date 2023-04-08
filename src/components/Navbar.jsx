import React from "react";
import Logotype from "../assets/Logotype.png";
import Path from "../assets/Path.png";
import Arrow from "../assets/Arrow.png";

function Navbar() {
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

  return (
    <>
      <div>
        <nav id="menu">
          <img src={Logotype} />
          <ul className="container">
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
                <li className="layout">
                  <span className="grid-container">
                    <span>Post Header</span>
                    <img src={Arrow} />
                  </span>
                  
                    <div className="second-submenu">Share Buttons</div>
                 
                </li>
                <li className="">
                  <span className="grid-container">
                    <span>Post Layout</span>
                    <img src={Arrow} />
                  </span>
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
