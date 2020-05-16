import React from "react"

export default function Features() {
  return (
    <section id="features">
      <div className="feature-row">
        <div className="feature-col">
          <img alt="item" src="Images/pic-1.png" />
          <h4>Learn Anywhere</h4>
          <p>Switch between your computer , tablet or mobile device</p>
        </div>
        <div className="feature-col">
          <img alt="item" src="Images/pic-2.png" />
          <h4>Expern Teachers </h4>
          <p>Learn from industry experts who are passionate about teaching</p>
        </div>
        <div className="feature-col">
          <img alt="item" src="Images/pic-3.png" />
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
