import React from "react"
import Header from "../components/new_header"
import { Link } from "gatsby"

export default () => (
  <div style={{ color: `teal` }}>
    <Link to="/contact">Click here</Link>
    <Header headerText="So Cool"/>
    <Header headerText="Hi there"/>
    <p>Such wow. Very React.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)