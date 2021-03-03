import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/Layout"


const IndexPage = () => {
  return (
    <Layout pageTitle="My Blog">
      <title>Home Page</title>
      <h1>Welcome To my Blog</h1>
      <p>Hi there I'm Brandon!</p>
      <h3>Here's a little <Link to='/about'>About</Link> me!</h3>
      <StaticImage src="https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/138647849_10218849429097844_988102627532135130_n.jpg?_nc_cat=110&ccb=3&_nc_sid=8bfeb9&_nc_ohc=D1_lSUTQY2EAX_MjWaI&_nc_ht=scontent.ftpa1-1.fna&oh=430d141181f8fb3951bb878f3a38c088&oe=6065BF3A" alt="Picture of Brandon Turner and fiance"/>
    </Layout>
  )
}

export default IndexPage
