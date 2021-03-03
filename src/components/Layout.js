import { Link, useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import "../styles/style.css"

const Layout = ( { children, pageTitle } ) => {
const data = useStaticQuery(graphql` 
        query{
            site {
                siteMetadata {
                    title
                    }
                }
            }
`)

    return (
        <div>
            <title>{pageTitle}</title>
            <p className="title">{data.site.siteMetadata.title}</p>
            <nav>
                <ul className="nav-bar">
                    <li className="nav-bar-link">
                        <h3><Link to="/">Home</Link></h3>
                    </li>
                    <li className="nav-bar-link">
                        <h3><Link to="/about">About</Link></h3>
                    </li>
                    <li className="nav-bar-link">
                        <h3><Link to="/blog">Blog</Link></h3>
                    </li>
                </ul>
            </nav>
            <h1>{pageTitle}</h1>
            <body>
            { children }
            </body>
            <footer>
                <h6>Created by Brandon Turner</h6>
            </footer>
        </div>
    )
}

export default Layout
