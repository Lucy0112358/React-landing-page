import React from "react";
import Logotype from "../assets/Logotype.png";
import Path from "../assets/Path.png";

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
          <div className="container">
          <div>
            Demos
            <img src={Path} />
          </div>
          <div>
          Post
            <img src={Path} />
          </div>{" "}
          <div>
          Features
            <img src={Path} />
          </div>{" "}
          <div>
          Categories
            <img src={Path} />
          </div>{" "}
          <div>
          Shop
            <img src={Path} />
          </div>{" "}
          <div>
            Demos
           
          </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
