import React from "react"
import fb from "../images/facebook.png"
import tw from "../images/twitter.png"
import ig from "../images/instagram.png"
import ln from "../images/linkedin.png"

export default function Icons() {
  return (
    <div className="social-icons">
      <img src={fb} alt="sm" />
      <img src={tw} alt="sm" />
      <img src={ig} alt="sm" />
      <img src={ln} alt="sm" />
    </div>
  )
}
