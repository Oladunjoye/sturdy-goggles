import React from "react"

export default function Contact() {
  return (
    <section id="contact">
      <div className="content-container contact-row">
        <div className="contact-left">
          <h2>
            Sign Up to Join our <br /> Learning community
          </h2>
          <form>
            <input type="text" placeholder="Enter name" />
            <input type="email" placeholder="Enter email address" />
            <input type="text" placeholder="Enter password" />
            <div className="btn-box">
              <button className="common-btn">Sign Up</button>
              <button className="common-btn">Start Free</button>
            </div>
          </form>
          <div className="line">
            <span className="line-1"></span>
            <br />
            <span className="line-2"></span>
            <br />

            <span className="line-3"></span>
          </div>
        </div>
        <div className="contact-right">
          <img src="Images/contact.png" alt="contact" />
        </div>
      </div>
    </section>
  )
}
