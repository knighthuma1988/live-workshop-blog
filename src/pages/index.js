import { Link } from "gatsby"
import * as React from "react"


const IndexPage = () => {
  return (
    <main>
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
    </main>
  )
}

export default IndexPage
