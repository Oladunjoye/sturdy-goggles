import React from "react"

export default function About() {
  return (
    <section id="offer">
      <div className="about-left">
        <img src="Images/offer.png" alt="about" />
      </div>
      <div className="about-right">
        <div className="about-text">
          <h2>
            Limitless Learning <br /> Limitless Possibilities
          </h2>
          <span className="square"></span>

          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>

          <button className="common-btn">Start Free Trial</button>

          <div className="line">
            <span className="line-1"></span>
            <br />
            <span className="line-2"></span>
            <br />

            <span className="line-3"></span>
          </div>
        </div>
      </div>
    </section>
  )
}
