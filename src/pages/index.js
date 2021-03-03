import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"


const IndexPage = () => {
  return (
    <Layout pageTitle="My Blog">
      <title>Home Page</title>
      <h1>
        Congratulations
        <br />
        <span>— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <p>Hi there I'm Brandon!</p>
      <h3>Here's a little <Link to='/about'>About</Link> me!</h3>
    </Layout>
  )
}

export default IndexPage
