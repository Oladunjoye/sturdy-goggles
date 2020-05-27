import React from "react"
import logo from "../images/logo.png"

export default function Footer() {
  return (
    <section id="footer">
      <div className="content-container">
        <hr />
        <div className="footer-row">
          <div className="footer-left">
            <div className="footer-links">
              <div className="link-title">
                <h4>Product</h4>
                <small>Our Plans</small>
                <small>Free</small>
              </div>
              <div className="link-title">
                <h4>About Us</h4>
                <small>Request Demo </small>
                <small>FAQs</small>
              </div>

              <div className="link-title">
                <h4>Support</h4>
                <small>Features</small>
                <small>Contact Us</small>
              </div>

              <div className="link-title">
                <h4>Explore</h4>
                <small>Find a non-profit </small>
                <small>Corporate Solution </small>
              </div>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-info">
              <div className="copyright-text">
                <small>support@xypo.com</small>
                <small>copyright © 2020 </small>
              </div>
              <div className="footer-logo">
                <img src={logo} alt="footer" />
                <button className="common-btn">English</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
