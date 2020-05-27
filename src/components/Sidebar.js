import React from "react"
import { Link } from "gatsby"
// import Hamburger from "./Hamburger"
import menu from "../images/menu.png"

export default function Sidebar() {
  const handleClick = () => {
    // let menuBtn = document.getElementById("menuBtn")
    let sideNav = document.getElementById("sideNav")

    // sideNav.style.right = "-250px"

    if (sideNav.style.right === "-250px") {
      sideNav.style.right = "0"
    } else {
      sideNav.style.right = "-250px"
    }
  }
  return (
    <>
      <nav id="sideNav">
        <ul>
          <li>
            <Link>Home</Link>
          </li>

          <li>
            <Link>About Us</Link>
          </li>

          <li>
            <Link>Features</Link>
          </li>

          <li>
            <Link>Courses</Link>
          </li>

          <li>
            <Link>Offer</Link>
          </li>
        </ul>
      </nav>
      <img onClick={handleClick} alt="hamburger" id="menuBtn" src={menu} />
    </>
  )
}
