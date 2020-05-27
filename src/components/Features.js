import React from "react"
import pic1 from "../images/pic-1.png"
import pic2 from "../images/pic-2.png"
import pic3 from "../images/pic-3.png"

export default function Features() {
  return (
    <section id="features">
      <div className="feature-row">
        <div className="feature-col">
          <img alt="item" src={pic1} />
          <h4>Learn Anywhere</h4>
          <p>Switch between your computer , tablet or mobile device</p>
        </div>
        <div className="feature-col">
          <img alt="item" src={pic2} />
          <h4>Expern Teachers </h4>
          <p>Learn from industry experts who are passionate about teaching</p>
        </div>
        <div className="feature-col">
          <img alt="item" src={pic3} />
          <h4>Unlimited Access</h4>
          <p>
            Choose what you'd like to learn from our extensive subscription
            library
          </p>
        </div>
      </div>
      <div className="feature-btn">
        <div className="line">
          <span className="line-1"></span>
          <br />
          <span className="line-2"></span>
          <br />

          <span className="line-3"></span>
        </div>
        <button className="common-btn">Start Free Trial</button>
      </div>
    </section>
  )
}
