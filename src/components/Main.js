import React from "react"
import "./style.css"
import logo from "../images/logo.png"

export default function Main() {
  return (
    <main className="main">
      <div className="content-container">
        <img className="logo" src={logo} />
        <div className="content-text">
          <h1>
            The purpose is to <br /> teach, bring learning to people
          </h1>
          <span className="square"></span>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have sufered alteration in some form, by injected
            humor, or randomised words whcih dont look even slighly believable
          </p>
          <button className="common-btn">Read More</button>

          <div className="line">
            <span className="line-1"></span>
            <br />
            <span className="line-2"></span>
            <br />

            <span className="line-3"></span>
          </div>
        </div>
      </div>
    </main>
  )
}
