import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Main from "../components/Main"
// import "../components/style.css"

// import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import Sidebar from "../components/Sidebar"
import About from "../components/About"
import Features from "../components/Features"
import Courses from "../components/Courses"
import Offer from "../components/Offer"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Icons from "../components/Icons"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Main />
    <Sidebar />
    <Icons />
    <About />
    <Features />
    <Courses />
    <Offer />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage

// <Layout>
// <SEO title="Home" />
// <h1>Hi people</h1>
// <p>Welcome to your new Gatsby site.</p>
// <p>Now go build something great.</p>
// <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//   <Image />
// </div>
// <Link to="/page-2/">Go to page 2</Link>
// </Layout>
