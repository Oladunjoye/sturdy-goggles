import React from "react"
import course from "../images/course.png"

export default function Courses() {
  return (
    <section id="courses">
      <div className="content-container course-row">
        <div className="course-left">
          <div className="course-text">
            <h2>
              Browse our Top <br /> Courses
            </h2>
            <span className="square"></span>

            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              purpose (injected humour and the like).
            </p>
            <button className="common-btn">View All Courses</button>

            <div className="line">
              <span className="line-1"></span>
              <br />
              <span className="line-2"></span>
              <br />

              <span className="line-3"></span>
            </div>
          </div>
        </div>
        <div className="course-right">
          <img src={course} alt="course" />
        </div>
      </div>
    </section>
  )
}
